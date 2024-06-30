import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";


describe('App component', () => {

  it('App renders', () => {
    render(<App />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('typing in searchbox work', () => {
    render(<App />);

    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();

  });

  it('Filter is work', () => {
    render(<App />);

    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();

    userEvent.type(screen.getByRole('textbox'), 'script');

    expect(screen.queryByText(/vue/i)).toBeNull();
    expect(screen.queryByText(/javascript/i)).toBeInTheDocument();

  });

});