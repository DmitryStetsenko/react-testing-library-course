import { render, screen } from "@testing-library/react";
import List from "./List";

const data = ['html', 'css', 'js', 'React'];

describe('List component', () => {

  it('List render', () => {
    render(<List items={ data } />);
    
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText(/html/)).toBeInTheDocument();
  });

  it('List render without data', () => {
    render(<List />);

    expect(screen.queryByRole('list')).toBeNull();
  });

  it('List snapshot', () => {
    const list = render(<List items={ data }/>);

    expect(list).toMatchSnapshot();
  });

  it('List empty snapshot', () => {
    const list = render(<List />);

    expect(list).toMatchSnapshot();
  });

});
