import React from "react";
import Image from "../../assets/images/Mask-Group-3.png";
import Avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <div className="bookmark">
          <FontAwesomeIcon icon="bookmark" />
          <span>775</span>
        </div>
        <div className="love">
          <FontAwesomeIcon icon="heart" />
          <span>93</span>
        </div>
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
