import axios from 'axios';
import Base from './base';

export default class CreateUrl extends Base {
  private readonly element: HTMLElement;
  private readonly urlInput: HTMLInputElement;
  private readonly button: HTMLElement;

  constructor(element: HTMLElement) {
    super(element);

    element.innerHTML = `
      <input
        type='url'
        placeholder='Shorten some urls'
      />
      <button type='button'>
        Shorten
      </button>
    `;

    this.element = element;
    this.urlInput = element.querySelector('input[type="url"]');
    this.button = element.querySelector('button[type="button"]');

    this.button.addEventListener('click', async (e) => {
      e.preventDefault();
      await this.submit();
    });

    this.urlInput.addEventListener('keyup', async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        await this.submit();
      }
    });
  }

  private submit = async (): Promise<void> => {
    if (this.isValid()) {
      await axios({
        url: 'api/',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: { url: this.urlInput.value },
      });

      this.element.dispatchEvent(
        new Event('url-created', { bubbles: true, cancelable: true })
      );
    }
  };

  private isValid = (): boolean => {
    if (this.urlInput.value.length === 0) return false;

    try {
      new URL(this.urlInput.value);
      return true;
    } catch (e) {
      return false;
    }
  };

  refresh = (): void => {
    if (this.urlInput) this.urlInput.value = '';
  };
}
