import React, { useState } from "react";
import TweetList from "./components/TweetList";
import MenuUser from "./components/MenuUser";
import Trends from "./components/Trends";
import CreateTweet from "./components/CreateTweet";
import FilterTweets from "./components/FilterTweets";
import './style/App.scss'

function App() {
  const [name, setName] = useState("Tony Stark");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [textInputFilter, setTextInputFilter] = useState("");
  const [tweetsFilter, setTweetsFilter] = useState([]);

  return (
    <div className="app-wrapper">
      <MenuUser />
      <CreateTweet className='tweets-create'
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
        tweetsFilter={tweetsFilter}
        setTweetsFilter={setTweetsFilter}
      />
      <TweetList 
        name={name}
        tweets={tweets}
        setTweets={setTweets}
        tweetsFilter={tweetsFilter}
        setTweetsFilter={setTweetsFilter}
      />
      <FilterTweets 
        textInputFilter={textInputFilter}
        setTextInputFilter={setTextInputFilter}
        tweets={tweets}
        setTweets={setTweets}
        tweetsFilter={tweetsFilter}
        setTweetsFilter={setTweetsFilter}
      />
      <Trends  / >
    </div>
  );
}

export default App;
