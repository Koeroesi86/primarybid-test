import { render } from '@testing-library/vue';
import ShortUrlResponse from '../types/ShortUrlResponse';
import UrlList from './urlList';

describe('UrlList', () => {
  it('should render', () => {
    const result = render(UrlList);

    expect(result.container).toMatchSnapshot();
  });

  it('should render list', () => {
    const result = render(UrlList, {
      props: {
        listing: [
          {
            url: 'https://example.com/asdf',
            original: 'https://something.com/example/url',
          },
        ] as ShortUrlResponse[],
      },
    });

    expect(result.container).toMatchSnapshot();
  });
});
