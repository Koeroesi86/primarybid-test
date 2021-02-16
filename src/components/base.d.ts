export default class Base {
    constructor(element: HTMLElement);
    refresh(): void | Promise<void>;
}
