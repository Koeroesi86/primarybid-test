import { createRequest, createResponse } from 'node-mocks-http';
import { mocked } from 'ts-jest/utils';
import shortenedRedirect from './shortenedRedirect';
import urlStore from '../services/urlStore';
import createDatabase from '../config/createDatabase';

jest.mock('../services/urlStore');
jest.mock('mongodb');

describe('shortenedRedirect', () => {
  const mockedStore = mocked(urlStore, true);

  it('should redirect', async () => {
    const request = createRequest({
      params: { id: '123' },
    });
    const response = createResponse();
    const next = jest.fn();
    const db = await createDatabase();

    mockedStore.get.mockResolvedValueOnce({
      token: 'test',
      url: 'https://example.com',
    });

    await shortenedRedirect(db)(request, response, next);

    expect(next).toHaveBeenCalledTimes(0);
    expect(response.statusCode).toEqual(302);
    expect(response.getHeaders()).toMatchSnapshot('headers');
  });
});
