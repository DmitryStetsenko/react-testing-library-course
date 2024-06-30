import s from "./Search.module.css";
import cn from "classnames";

const Search = (props) => {
  const { value, onChange, children = 'Search', placeholder = 'search...'} = props;

  const inputClass = cn({
    [s.input]: true,
    [s.filled]: value.length,
  });

  return (
    <label className={ s.label }>
      { children }
      <input
        className={ inputClass }
        type="text"
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
      />
    </label>
  );
};

export default Search;