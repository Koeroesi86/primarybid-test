export default class Base {
  constructor(element: HTMLElement) {
    if (!element) throw new Error('element is not defined');
  }

  refresh(): void | Promise<void> {}
}
