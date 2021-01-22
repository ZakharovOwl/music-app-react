import React, { useState } from "react";

const Tweet = ({
  name,
  tweet,
  tweets,
  setTweets,
  tweetsFilter,
  setTweetsFilter,
}) => {
  // const [tweet, setTweet] = useState(`${tweet}`);
  //functions

  const deleteTweet = () => {
    setTweetsFilter(tweetsFilter.filter((state) => state.id !== tweet.id));
    setTweets(tweetsFilter.filter((state) => state.id !== tweet.id));
  };

  const editTweet = () => {
    for (let i = 0; i < tweetsFilter.length; i++) {
      if (tweetsFilter[i].id === tweet.id) {
        let newTweet = prompt(`${tweet.message}`);
        tweets[i].message = newTweet;
        tweetsFilter[i].message = newTweet;
        setTweetsFilter([...tweets]);
        setTweets([...tweetsFilter]);
      } 
    }
  };

  return (
    <div className="tweet-wrapper">
      <div className="tweet-btns">
        <img
          onClick={deleteTweet}
          className="img-btns"
          src="https://www.flaticon.com/svg/static/icons/svg/1828/1828843.svg"
          alt="remove-img"
        />
        <img
          onClick={editTweet}
          className="img-btns"
          src="https://www.flaticon.com/svg/static/icons/svg/860/860763.svg"
          alt="edit-img"
        />
        <img
          className="img-btns"
          src="https://www.flaticon.com/svg/static/icons/svg/872/872229.svg"
          alt="like"
        />
      </div>
      <div className="tweet-user">
        <img
          className="tweet-user-ava"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qBMp5TG3lTOM4Dn4MCcrdxavrtwcvE_DqQ&usqp=CAU"
          alt="ava"
        />
        <div>
          <h2>{name}</h2>
          <h3>{tweet.message}</h3>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
