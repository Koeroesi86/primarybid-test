import moxios from 'moxios';
import UrlList from './urlList';

describe('UrlList', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should render', () => {
    moxios.stubRequest('api/', { status: 200, response: [] });
    const element = document.createElement('div');

    new UrlList(element);

    expect(element.innerHTML).toMatchSnapshot();
  });
});
