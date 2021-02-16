/// <reference types="jest" />
import ShortUrl from '../../types/ShortUrl';
declare const _default: {
    create: jest.Mock<Promise<ShortUrl>, []>;
    getAll: jest.Mock<Promise<ShortUrl[]>, []>;
    get: jest.Mock<Promise<ShortUrl>, []>;
};
export default _default;
