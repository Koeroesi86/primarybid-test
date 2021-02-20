import { render } from '@testing-library/vue';
import CreateUrl from './createUrl';

describe('CreateUrl', () => {
  it('should render', () => {
    const result = render(CreateUrl);

    expect(result.container).toMatchSnapshot();
  });
});
