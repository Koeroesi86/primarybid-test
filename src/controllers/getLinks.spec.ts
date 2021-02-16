import { createRequest, createResponse } from 'node-mocks-http';
import getLinks from './getLinks';
import { mocked } from 'ts-jest/utils';
import urlStore from '../services/urlStore';
import createDatabase from '../config/createDatabase';

jest.mock('../services/urlStore');
jest.mock('mongodb');

describe('getLinks', () => {
  const mockedStore = mocked(urlStore, true);
  process.env.BASE_URL = 'https://test.com';

  it('should respond with success', async () => {
    const request = createRequest();
    const response = createResponse();
    const db = await createDatabase();
    mockedStore.getAll.mockResolvedValueOnce([
      { token: 'test1', url: 'https://example1.com' },
      { token: 'test2', url: 'https://example2.com' },
    ]);

    await getLinks(db)(request, response);

    expect(response.statusCode).toEqual(200);
    expect(response._getData()).toMatchSnapshot('data');
  });

  it('should respond error', async () => {
    const request = createRequest();
    const response = createResponse();
    const db = await createDatabase();
    mockedStore.getAll.mockRejectedValueOnce(new Error('test'));

    await getLinks(db)(request, response);

    expect(response.statusCode).toEqual(400);
    expect(response._getData()).toMatchSnapshot('data');
  });
});
