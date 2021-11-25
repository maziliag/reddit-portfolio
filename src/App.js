import './App.css';
import Header from './Components/header';
import Feed from './Components/feed';
import Categories from './Components/categories';
import React, { useState, useEffect } from 'react';

function App() {

const [displaySearch, setDisplaySearch] = useState(false);
const [topic, setTopic] = useState("pokemon")
const [feedList, setFeedList] = useState([]);
const [counter, setCounter] = useState(0)

  useEffect(() => {
    getPosts();
  }, [topic]);

  let list = [];

  const getPosts = async () => {
    const response = await fetch(
      `https://www.reddit.com/r/${topic}.json`
    );
    console.log(response)
    const json = await response.json();
    json.data.children.map(item => (
      list.push(item)
    ))
    console.log(json)
    setFeedList(list);
  }
//Closes search box
  const closeSearch = () => {
    setDisplaySearch(false)
}
 
//______________________________________________
  return (
    <div className="App">

      <Header
        displaySearch={displaySearch}
        setDisplaySearch={setDisplaySearch}
        setTopic={setTopic}
        topic={topic}
        counter={counter}
        setCounter={setCounter}
      />
        <div className="body" onClick={closeSearch}>
          <Feed feedList={feedList}/>
          <Categories 
            setTopic={setTopic}/>
        </div>
    </div>
  );
}

export default App;
