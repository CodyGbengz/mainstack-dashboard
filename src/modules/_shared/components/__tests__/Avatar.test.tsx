import { render } from '@testing-library/react';
import { Avatar } from '../Avatar';

describe('COMPONENT TEST: Avatar', () => {
  const setup = () => render(<Avatar />);

  test('Should match snapshot', () => {
    const { container } = setup();
    expect(container.parentElement).toMatchSnapshot();
  });
});
