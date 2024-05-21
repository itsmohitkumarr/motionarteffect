import React from "react";

const HeroBanner = () => {
  return (
    <div className="w-full flex items-start justify-start px-24 pt-10">
      <div className="flex flex-col text-2xl w-60">
        <span className="font-semibold gradient-text text-transparent animate-gradient">
          Transform <br /> Your Website
        </span>
        <span>
          With Motion Art <br /> Effect
        </span>
      </div>
      <div className="flex flex-col text-8xl">
        <span>
          Attract Your <br /> Visitors Attention <br /> With Colorful
        </span>
        <span className="gradient-text text-transparent animate-gradient">
          Motion Art Effect
        </span>
        <span className="text-xl text-gray-400 pt-6">
          Unleash the power of creativity with Motion Art for Elementor - your
          <br />
          ultimate solution for seamlessly integrating captivating animations
          into <br /> your website.
        </span>
      </div>
    </div>
  );
};

export default HeroBanner;
