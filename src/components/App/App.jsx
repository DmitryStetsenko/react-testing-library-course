import { useEffect, useState } from "react";
import List from "../List";
import "./App.css";
import Search from "../Search";

const data = [
  'Html', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'NodeJS',
];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter(item => item.toLowerCase().includes(search.toLowerCase())));
  }, [search]);

  return (
    <div className="App">

      <h2>Search</h2>
      <Search value={ search } onChange={ e => setSearch(e.target.value) }>
        Find text
      </Search>
      
      <h1>List</h1>
      <List items={ items }/>

    </div>
  );
}

export default App;
