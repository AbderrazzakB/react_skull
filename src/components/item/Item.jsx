import React from "react";
import Image from "../../assets/images/Mask-Group-3.png";
import Avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";
import "./index.scss";
function Item() {
  return (
    <div className="item">
      <div className="item-head">
        <img src={Avatar} alt="avatar" srcSet="" className="item-avatar" />
        <span className="item-title">Perledelune</span>
      </div>
      <div className="item-image">
        <img src={Image} alt="shu" />
        <button className="bookmark">
          <FontAwesomeIcon icon={faBookmark} />
          <span>775</span>
        </button>
        <button className="love">
          <FontAwesomeIcon icon={faHeart} />
          <span>93</span>
        </button>
      </div>
      <div className="item-footer">
        <span className="item-prix">99 MAD</span>
        <span className="item-size">X5/34/6</span>
        <span className="item-description">Loavies</span>
      </div>
    </div>
  );
}

export default Item;
