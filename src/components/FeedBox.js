import React from "react";
import "./css/feedBox.css";

import Left from "./Left";
import Feed from "./Feed";
import Right from "./Right";

function FeedBox() {
  return (
    <div className="feed_box">
      <Left />
      <Feed />
      <Right />
    </div>
  );
}

export default FeedBox;
