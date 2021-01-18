import React from "react";
import Card from "../card/Card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../../assets/images/avatar.png";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

export const CardSlide = () => {
  return (
    <div className="slide">
      <div className="head">
        <div className="profile">
          <div className="title">
            <img src={Avatar} alt="avatar" srcSet="" />
            <div>
              <div className="username">Sasha22</div>
              <div className="rate">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>

          <div className="menu">
            <button className="follow">Suivre</button>
            <button className="menu">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
          </div>
        </div>
        <div className="navigate">
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
