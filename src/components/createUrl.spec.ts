import CreateUrl from './createUrl';

describe('CreateUrl', () => {
  it('should render', () => {
    const element = document.createElement('div');

    new CreateUrl(element);

    expect(element.innerHTML).toMatchSnapshot();
  });
});
