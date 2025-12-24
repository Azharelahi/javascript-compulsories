import React from 'react'
import Child from "./Child.js"
const App = () => {
  const data = ["Azhar Elahi","Mazhar khan"]
  return (
    <div>
      <Child message={data} /> {/* send data as prop */}
    </div>
  );
};

export default App;

