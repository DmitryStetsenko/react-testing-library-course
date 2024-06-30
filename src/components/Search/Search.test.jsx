import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

const onChange = jest.fn();

describe('Search component', () => {

  it('Render search component', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    expect(screen.getByText(/find/i)).toBeInTheDocument();
  });

  it('Render without children', () => {
    render(
      <Search value="" onChange={onChange} />
    );

    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });

  it('Render without placeholder', () => {
    render(
      <Search value="" onChange={onChange} />
    );

    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('onChange work', () => {
    render(
      <Search value="" onChange={onChange}>
        Find:
      </Search>
    );

    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalledTimes(5);
  });

  it('Dinamyc styles work', () => {
    render(
      <Search value="abc" onChange={ onChange } />
    );

    expect(screen.getByRole('textbox')).toHaveClass('input');
    expect(screen.getByRole('textbox')).toHaveClass('filled');
    expect(screen.getByText('Search')).toHaveClass('label');
  });

  it('Search snapshot', () => {
    const search = render(
      <Search value="abc" onChange={ onChange } />
    );

    expect(search).toMatchSnapshot();
  });

});