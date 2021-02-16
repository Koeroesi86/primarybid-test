import Base from './base';
export default class CreateUrl extends Base {
    private readonly element;
    private readonly urlInput;
    private readonly button;
    constructor(element: HTMLElement);
    private submit;
    private isValid;
    refresh: () => void;
}
