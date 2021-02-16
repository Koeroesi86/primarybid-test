import { createRequest, createResponse } from 'node-mocks-http';
import notFound from './notFound';

describe('notFound', () => {
  it('should redirect on error', () => {
    const error = new Error('test');
    console.error = jest.fn();
    const request = createRequest();
    const response = createResponse();
    const next = jest.fn();

    notFound(error, request, response, next);

    expect(next).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalled();
    expect(response.statusCode).toEqual(301);
    expect(response.getHeaders()).toMatchSnapshot('headers');
  });

  it('should call next on no error', () => {
    const request = createRequest();
    const response = createResponse();
    const next = jest.fn();

    notFound(null, request, response, next);

    expect(next).toHaveBeenCalled();
  });
});
