import React from "react";
import "./css/mainCard.css";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

function MainCard() {
  return (
    <div className="main_card">
      <img
        className="main_card_img"
        src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/02/20/14/taj-exotica-havelock-island-andaman-and-nicobar-islands-india-3895.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5"
        alt="andaman"
      ></img>

      {/* share  */}
      <div className="main_card_share">
        <h2>Title</h2>
        <TwitterShareButton
          url="https://stackoverflow.com/questions/45144386/how-to-implement-share-to-twitter-with-react-js"
          title="nanan"
          className="Demo__some-network__share-button share_icon_twitter"
        >
          <TwitterIcon size={35} round />
        </TwitterShareButton>

        <WhatsappShareButton
          url="https://stackoverflow.com/questions/45144386/how-to-implement-share-to-twitter-with-react-js"
          title="nanan"
          className="Demo__some-network__share-button share_icon_whatsapp"
        >
          <WhatsappIcon size={35} round />
        </WhatsappShareButton>
      </div>

      <h3>This is the bets place in the universal studios is very creative</h3>
    </div>
  );
}

export default MainCard;
