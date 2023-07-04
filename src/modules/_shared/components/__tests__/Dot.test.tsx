import { render } from '@testing-library/react';
import { Dot } from '../Dot';

describe('COMPONENT TEST: Dot', () => {
  const setup = () => render(<Dot color='blue' />);

  test('Should match snapshot', () => {
    const { container } = setup();
    expect(container.parentElement).toMatchSnapshot();
  });
});
