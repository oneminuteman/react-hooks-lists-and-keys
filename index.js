import React, { useState } from 'react';

function NameList({ names }) {
  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

// example usage
function App() {
  const [names, setNames] = useState(['Alice', 'Bob', 'Charlie']);
  
  // add a new name to the list
  function addName() {
    setNames([...names, 'Dave']);
  }
  
  return (
    <div>
      <NameList names={names} />
      <button onClick={addName}>Add Name</button>
    </div>
  );
}
