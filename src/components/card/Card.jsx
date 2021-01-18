import React from "react";
import Image from "../../assets/images/Mask-Group-3.png";
import Avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

function Card() {
  return (
    <div className="card">
      <div className="head">
        <img src={Avatar} alt="avatar" srcSet="" className="avatar" />
        <span className="title">Perledelune</span>
      </div>

      <div className="image">
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

      <div className="footer">
        <span className="prix">99 MAD</span>
        <span className="size">X5/34/6</span>
        <span className="description">Loavies</span>
      </div>
    </div>
  );
}

export default Card;
