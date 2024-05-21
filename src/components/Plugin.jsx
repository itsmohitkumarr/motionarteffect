import React from "react";
import PluginCard from "./PluginCard";
import Plugin1 from "../assets/motionarteffect-img6.png";
import Plugin2 from "../assets/motionarteffect-img7.png";
import Plugin3 from "../assets/motionarteffect-img9.png";

const Plugin = () => {
  return (
    <div>
      <div className=" w-full text-center text-5xl font-semibold pb-6">
        An All-Round Plugin With <br /> Powerful Features
      </div>
      <div className="w-full text-center text-lg text-gray-400">
        Whether you're a seasoned web designer or just starting out, Motion Art
        for <br /> Elementor seamlessly integrates with the Elementor platform,
        providing you <br /> with a seamless and intuitive experience.
      </div>
      <div className=" w-full flex items-center justify-center gap-6 py-14">
        <PluginCard
          heading={"Light Weight"}
          description={
            "Motion Art for Elementor is designed to be lightweight."
          }
          image={Plugin3}
        />
        <PluginCard
          heading={"100% Responsive"}
          description={
            "Create a consistent visual experience across all devices."
          }
          image={Plugin1}
        />
        <PluginCard
          heading={"User Friendly Interface"}
          description={
            "Ensure a smooth experience for both applicants and administrators."
          }
          image={Plugin2}
        />
      </div>
    </div>
  );
};

export default Plugin;
