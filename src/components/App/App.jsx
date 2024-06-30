import { useState } from "react";
import List from "../List";
import "./App.css";
import Search from "../Search";

const data = [
  'Html', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'NodeJS',
];

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">

      <h2>Search</h2>
      <Search value={ search } onChange={ e => setSearch(e.target.value) }>
        Find text
      </Search>
      
      <h1>List</h1>
      <List items={ data }/>

    </div>
  );
}

export default App;
