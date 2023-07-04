import { render } from '@testing-library/react';
import { Column } from '../Column';

describe('COMPONENT TEST: Column', () => {
  const setup = () => render(<Column />);

  test('Should match snapshot', () => {
    const { container } = setup();
    expect(container.parentElement).toMatchSnapshot();
  });
});
