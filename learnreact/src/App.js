import './App.css';
import Nav from './Nav';
import Counter from './Counter';
import ToDo from './ToDo';
import { useEffect, useState } from 'react';
import AddPost from './AddPost';
import axios from 'axios';


function App() {

  let [num, setNum] = useState(0)
  let [topic, setTopic] = useState("");
  let url = "http://localhost:4200/arr";
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
    let deleteUrl=`${url}/${id}`;
    axios.delete(deleteUrl)
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNewPost(topic);
    setTopic("");
  }
  function addNewPost(topic) {

    let id =  String( data.length ? Number( data[data.length - 1].id) + 1 : 1  ) ;
    console.log(id)
    let obj = { id:id, topic, status: false };
    let list = [...data, obj];
    setData(list);
    // let option = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body:JSON.stringify(obj)
    // }
    // apiRequest(url,option);
    axios.post(url,obj);
  }
  let heading = "react";
  function add() {
    console.log("react");
  }
  function sub(a, b) {
    console.log(a - b);
  }
  async function apiRequest(url, option) {
    let respons = await fetch(url, option);
    if (respons.status == 200) {
      console.log("added");
    }
  }
  async function dataFetching() {
    // let respons = await fetch(url)
    // let values = await respons.json();
    // setData(values);
    let respons=await axios.get(url);
    let value=respons.data;
    setData(value);
  }
  useEffect(() => {
    dataFetching();
  }, [])
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

      <AddPost
        topic={topic}
        handleSubmit={handleSubmit}
        setTopic={setTopic}
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
