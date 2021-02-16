import Base from './base';
export default class UrlList extends Base {
    private element;
    constructor(element: HTMLElement);
    refresh(): Promise<void>;
}
