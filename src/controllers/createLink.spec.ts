import { createRequest, createResponse } from 'node-mocks-http';
import createLink from './createLink';
import { mocked } from 'ts-jest/utils';
import urlStore from '../services/urlStore';
import createDatabase from '../config/createDatabase';

jest.mock('../services/urlStore');
jest.mock('mongodb');

describe('createLink', () => {
  const mockedStore = mocked(urlStore, true);
  process.env.BASE_URL = 'https://test.com';

  it('should respond with success', async () => {
    const request = createRequest();
    const response = createResponse();
    const db = await createDatabase();
    mockedStore.create.mockResolvedValueOnce({
      token: 'test1',
      url: 'https://example1.com',
    });

    await createLink(db)(request, response);

    expect(response.statusCode).toEqual(200);
    expect(response._getData()).toMatchSnapshot('data');
  });

  it('should respond on error', async () => {
    const request = createRequest();
    const response = createResponse();
    const db = await createDatabase();
    console.error = jest.fn();
    mockedStore.create.mockRejectedValueOnce(new Error('test'));

    await createLink(db)(request, response);

    expect(response.statusCode).toEqual(400);
    expect(response._getData()).toMatchSnapshot('data');
    expect(console.error).toHaveBeenCalled();
  });
});
