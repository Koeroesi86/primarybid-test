import { createRequest, createResponse } from 'node-mocks-http';
import getLink from './getLink';
import { mocked } from 'ts-jest/utils';
import urlStore from '../services/urlStore';
import createDatabase from '../config/createDatabase';

jest.mock('../services/urlStore');
jest.mock('mongodb');

describe('getLink', () => {
  const mockedStore = mocked(urlStore, true);
  process.env.BASE_URL = 'https://test.com';

  it('should respond with success', async () => {
    const request = createRequest();
    const response = createResponse();
    const db = await createDatabase();
    mockedStore.get.mockResolvedValueOnce({
      token: 'test1',
      url: 'https://example1.com',
    });

    await getLink(db)(request, response);

    expect(response.statusCode).toEqual(200);
    expect(response._getData()).toMatchSnapshot('data');
  });

  it('should respond error', async () => {
    const request = createRequest();
    const response = createResponse();
    const db = await createDatabase();
    mockedStore.get.mockRejectedValueOnce(new Error('test'));

    await getLink(db)(request, response);

    expect(response.statusCode).toEqual(400);
    expect(response._getData()).toMatchSnapshot('data');
  });
});
