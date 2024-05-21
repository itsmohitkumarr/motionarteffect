import wand from "../assets/motionarteffect-img5.png";

const Cursor = () => {
  return (
    <div className="flex justify-between w-full px-24 py-28">
      <div className="flex flex-col gap-6">
        <span className="text-5xl font-semibold">
          Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your
          Visitors
        </span>
        <span className="text-lg text-gray-400">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse <br /> your website with visually stunning
          motion art elements.
        </span>
        <button className="btn h-14 w-80 rounded">Purchase From Envato</button>
      </div>
      <img src={wand} alt="" />
    </div>
  );
};

export default Cursor;
