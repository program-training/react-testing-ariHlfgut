import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { userEvent } from "@testing-library/user-event";
describe("App", () => {
  test("first test", () => {
    render(<App />);
    const linkElement = screen.getByText(/Enter/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("button is clicked using userEvent", async () => {
    const user = userEvent.setup();
    render(<App />);
    const buttonElement = screen.getByRole("button", { name: "Click me" });
    await user.click(buttonElement);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toHaveTextContent(/URL:/);
  });
});
