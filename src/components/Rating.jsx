import RatingCard from "./RatingCard";
import leaf from "../assets/motionarteffect-img1.png";
import gtwo from "../assets/motionarteffect-img2.png";
import word from "../assets/motionarteffect-img3.png";

const Rating = () => {
  return (
    <>
      <div className="text-2xl text-center pt-24 pb-16">
        Trusted by thousands of users around the world
      </div>
      <div className="w-full flex items-center justify-around">
        <RatingCard platform={leaf} />
        <RatingCard platform={gtwo} />
        <RatingCard platform={word} />
      </div>
    </>
  );
};

export default Rating;
