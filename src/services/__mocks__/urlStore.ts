import ShortUrl from '../../types/ShortUrl';

export default {
  create: jest.fn(() => Promise.resolve({ token: '', url: '' } as ShortUrl)),
  getAll: jest.fn(() => Promise.resolve([] as ShortUrl[])),
  get: jest.fn(() => Promise.resolve({ token: '', url: '' } as ShortUrl)),
};
