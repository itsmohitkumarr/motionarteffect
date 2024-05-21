import Browsers from "../assets/motionarteffect-img8.png";

const Browser = () => {
  return (
    <div className="w-full px-24 mt-28 mb-20">
      <div className="flex flex-col w-full gap-6 rounded-xl gradient_box items-center justify-center py-10">
        <span className="text-3xl font-semibold">
          Supported by All Popular Browsers
        </span>
        <span className="text-lg text-gray-400 text-center">
          Rest assured, Motion Art is designed to be compatible with <br />
          all major web browsers.
        </span>
        <img src={Browsers} alt="Browsers" className="h-12 w-[32dvw]" />
      </div>
    </div>
  );
};

export default Browser;
