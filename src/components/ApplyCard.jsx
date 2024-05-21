const ApplyCard = ({ heading, description, image, className }) => {
  return (
    <div
      className={`flex flex-col w-[40dvw] gap-4 p-6 rounded-xl gradient_box ${className}`}
    >
      <span className="text-2xl font-semibold">{heading}</span>
      <span className="text-base text-gray-400">{description}</span>
      <img src={image} alt={heading} />
    </div>
  );
};

export default ApplyCard;
