import React from "react";
import "./css/feed.css";
import Title from "./Title.js";
import MainCard from "./MainCard.js";

function Feed() {
  return (
    <div className="feed">
      <Title>Trending</Title>
      <div className="feed_row_flex">
        <MainCard />
        <MainCard />
      </div>
      <div className="feed_row_flex">
        <MainCard />
        <MainCard />
      </div>
      <div className="feed_row_flex">
        <MainCard />
        <MainCard />
      </div>
      <div className="feed_row_flex">
        <MainCard />
        <MainCard />
      </div>
    </div>
  );
}

export default Feed;
