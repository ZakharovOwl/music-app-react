import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({
  textInput,
  setTextInput,
  tweets,
  setTweets,
  tweetsFilter,
  setTweetsFilter,
}) => {
  //State
  //Functions
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const sumbmitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTweetsFilter([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };
  const sumbmitEnter = (event) => {
    if (event.keyCode === 13) {
      setTweets([...tweets, { message: textInput, id: uuidv4() }]);
      setTweetsFilter([...tweets, { message: textInput, id: uuidv4() }]);
      setTextInput("");
    }
  };

  return (
    <div className="tweets-create-wrapper">
      <h3>What's happening?</h3>
      <form
        className="form-tweet"
        onSubmit={sumbmitTweetHandler}
        onKeyDown={(e) => sumbmitEnter(e)}
      >
        <textarea
          className="textarea-tweet"
          autoFocus={true}
          value={textInput}
          onChange={userInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <button className="form-tweet-btn">Submit</button>
      </form>
    </div>
  );
};

export default CreateTweet;
