// Apply.jsx
import React from "react";
import ApplyCard from "./ApplyCard";
import Apply1 from "../assets/motionarteffect-img11.png";
import Apply2 from "../assets/motionarteffect-img10.png";

const Apply = () => {
  return (
    <>
      <div className=" w-full text-center text-5xl font-semibold pb-28">
        Apply On Any Section Or Enable <br /> For Whole Page
      </div>
      <div className="flex w-full items-start justify-between px-24">
        <ApplyCard
          heading="Apply On Section"
          description="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
          image={Apply1}
        />
        <ApplyCard
          heading="Apply On Page"
          description="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
          image={Apply2}
          className="mt-24"
        />
      </div>
    </>
  );
};

export default Apply;
