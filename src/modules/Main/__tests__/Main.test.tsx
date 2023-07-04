import { render, screen } from "@testing-library/react";
import { Main } from "..";

describe("COMPONENT TEST: Main", () => {
  const setup = () => render(<Main />);

  test("Should match snapshot", () => {
    const { container } = setup();
    expect(container.parentElement).toMatchSnapshot();
  });


	test('should render page content correctly', () => {
		setup();
		expect(screen.getByText('Good morning, Blessing ⛅️', { exact: false })).toBeInTheDocument();
		expect(screen.getByText('Check out your dashboard summary', { exact: false })).toBeInTheDocument();
		expect(screen.getByText('View analytics', { exact: false })).toBeInTheDocument();
		expect(screen.getByText('500', { exact: false })).toBeInTheDocument();
	});
});
