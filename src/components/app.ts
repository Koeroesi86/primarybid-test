import CreateUrl from './createUrl';
import UrlList from './urlList';
import Base from './base';

export default class App extends Base {
  constructor(element: HTMLElement) {
    super(element);

    element.innerHTML = `
      <div class='layout'>
        <h1>Primary Bid test</h1>
        <div class='createUrl'></div>
        <div class='urlList'></div>
      </div>
    `;

    const createUrl = new CreateUrl(element.querySelector('.createUrl'));
    const urlList = new UrlList(element.querySelector('.urlList'));

    element.addEventListener('url-created', (e) => {
      e.stopPropagation();
      createUrl.refresh();
      urlList.refresh();
    });
  }
}
