import React, { useState } from "react";
//components
import CreateTweet from "./TweetsDetals/CreateTweet";
import FilterTweets from "./TweetsDetals/FilterTweets";
import Trends from "./TweetsDetals/Trends";
import TweetList from "./TweetsDetals/TweetList";

const MyTweets = ({
  name,
  setName,
  textInput,
  setTextInput,
  tweets,
  setTweets,
  textInputFilter,
  setTextInputFilter,
  tweetsFilter,
  setTweetsFilter,
}) => {
  return (
    <div>
      <CreateTweet
        className="tweets-create"
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
      <Trends />
    </div>
  );
};

export default MyTweets;
