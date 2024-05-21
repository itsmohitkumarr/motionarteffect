import React from "react";

const PluginCard = ({ heading, description, image }) => {
  return (
    <div className="flex flex-col w-[28dvw] gap-4 p-8 rounded-xl gradient_box">
      <img src={image} alt={heading} className="h-36 w-36" />
      <span className="text-2xl font-semibold">{heading}</span>
      <span className="text-lg text-gray-400">{description}</span>
    </div>
  );
};

export default PluginCard;
