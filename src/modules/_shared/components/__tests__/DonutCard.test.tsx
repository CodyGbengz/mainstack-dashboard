import { render, screen } from '@testing-library/react';
import { DonutCard, DonutCardProps } from '../DonutCard';

describe('COMPONENT TEST: DonutCard', () => {
  const chartTestData = [
    {
      country: 'Nigeria',
      count: 68,
      percent: 34,
    },
    {
      country: 'Germany',
      count: 37,
      percent: 19,
    },
  ];

  const setup = (props: Partial<DonutCardProps> = {}) =>
    render(
      <DonutCard
        title='My test card'
        chartData={chartTestData}
        {...props}
      />
    );

  test('Should match snapshot', () => {
    const { container } = setup();
    expect(container.parentElement).toMatchSnapshot();
  });

  test('should render title -My test card', () => {
    setup();
    expect(
      screen.getByText('My test card', { exact: false })
    ).toBeInTheDocument();
  });

  test('should render correctly with content', () => {
    setup();
    expect(screen.getByText('Nigeria', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Germany', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('34', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('19', { exact: false })).toBeInTheDocument();
  });
});
