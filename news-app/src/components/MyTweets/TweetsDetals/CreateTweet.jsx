import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({
  data,
  setData,
  name,
  setName,
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
    let timeSubmit = new Date().toLocaleString();

    //LOCAL
    let dataTwts = data
    localStorage.setItem(
      `dataTweets`,
      JSON.stringify([
        ...tweets,
        {
          message: textInput,
          id: uuidv4(),
          name: name,
          timeSubmit: timeSubmit,
        },
      ])
    );
    dataTwts = localStorage.getItem("dataTweets");
    dataTwts = JSON.parse(dataTwts);
    console.log(dataTwts);
    //LOCAl
    setData([...dataTwts]);
    setTweets([...dataTwts]);
    setTweetsFilter([...dataTwts]);
    setTextInput("");
  };

  const sumbmitEnter = (event) => {
    let timeSubmit = new Date().toLocaleString();
    if (event.keyCode === 13) {
       //LOCAL
       let dataTwts = data
       localStorage.setItem(
         `dataTweets`,
         JSON.stringify([
           ...tweets,
           {
             message: textInput,
             id: uuidv4(),
             name: name,
             timeSubmit: timeSubmit,
           },
         ])
       );
       dataTwts = localStorage.getItem("dataTweets");
       dataTwts = JSON.parse(dataTwts);
       console.log(dataTwts);

       //LOCAl
      setData([...dataTwts]);
      setTweets([...dataTwts]);
      setTweetsFilter([...dataTwts]);
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
