import axios from 'axios';
import Base from './base';
import ShortUrlResponse from '../types/ShortUrlResponse';

export default class UrlList extends Base {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    super(element);

    element.innerHTML = '';

    this.element = element;
    this.refresh();
  }

  async refresh(): Promise<void> {
    const res = await axios('api/');
    this.element.innerHTML = '';

    const list: ShortUrlResponse[] = res.data;

    if (!Array.isArray(list) || list.length === 0) {
      this.element.innerHTML = 'No urls yet. Why not create one?';
    } else {
      list.forEach((shortUrl) => {
        this.element.innerHTML += `
            <a
              href='${shortUrl.url}'
              target='_blank'
              title='${encodeURIComponent(shortUrl.original)}'
            >
              ${shortUrl.url}
            </a>
          `;
      });
    }
  }
}
