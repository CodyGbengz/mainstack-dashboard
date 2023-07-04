import { render } from '@testing-library/react';
import { Row } from '../Row';

describe('COMPONENT TEST: Row', () => {
  const setup = () => render(<Row />);

  test('Should match snapshot', () => {
    const { container } = setup();
    expect(container.parentElement).toMatchSnapshot();
  });
});
