import { render, screen } from "@testing-library/react";
import Sidebar from "../Sidebar";

describe("COMPONENT TEST: Sidebar", () => {
  const setup = () => render(<Sidebar />);

  test("Should match snapshot", () => {
    const { container } = setup();
    expect(container.parentElement).toMatchSnapshot();
  });

  test("should render sidebar footer content correctly", () => {
    setup();
    expect(screen.getByText("Blessing", { exact: false })).toBeInTheDocument();
    expect(screen.getByAltText("user avatar")).toBeTruthy();
  });

  test("should render sidebar content correctly", () => {
    setup();
    expect(screen.getByText("Dashboard", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("OTHERS 1", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Item 2", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Item 3", { exact: false })).toBeInTheDocument();
    expect(screen.getByText("Item 1", { exact: false })).toBeInTheDocument();
  });

  
});
