import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Counter from './Counter';
import ToDo from './ToDo';
import { useState } from 'react';


function App() {

  let [num, setNum] = useState(0)

  function increment() {
    setNum(num += 1);
  }
  let decrement = () => {

    setNum(num -= 1);

  }

  let [data, setData] = useState([
    { id: 1, topic: "html", status: true },
    { id: 2, topic: "css", status: false },
    { id: 3, topic: "react", status: false },
    { id: 4, topic: "node", status: true },
  ])
  function handleChange(id) {
    let list = data.map(
      (obj1) => obj1.id === id ? { ...obj1, status: !obj1.status } : obj1)
    setData(list);
  }

  function handleDelete(id) {
    let list = data.filter((obj1) => obj1.id !== id)
    setData(list);
  }


  let heading = "react";
  function add() {
    console.log("react");
  }
  function sub(a, b) {
    console.log(a - b);
  }
  return (
    <div className="App">
      <h1>{heading}</h1>
      <button onClick={add}>click here</button>
      <button onClick={() => sub(8, 9)}>sub</button>
      <Nav />
      <Counter
        num={num}
        increment={increment}
        decrement={decrement}
      />
      <ToDo
        data={data}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
