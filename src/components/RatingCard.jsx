import React from "react";
import stars from "../assets/motionarteffect-img4.png";

const RatingCard = ({ platform }) => {
  return (
    <div className="flex w-72 h-24 items-center justify-around">
      <img src={platform} alt="Leaf" />
      <div className="flex flex-col gap-2">
        <img src={stars} alt="Stars" />
        <span className="text-base text-gray-400">4.5 Score, 9 Reviews</span>
      </div>
    </div>
  );
};

export default RatingCard;
