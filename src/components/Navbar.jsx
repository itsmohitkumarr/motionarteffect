import logo from "../assets/MotionArtEffect-logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex h-28 items-center justify-between px-20">
      <img src={logo} alt="Logo" className="h-14" />
      <button className="bg-white text-[#0E0F1A] border-2 border-white hover:bg-transparent hover:text-white w-40 h-12 rounded text-base">
        Purchase Now
      </button>
    </nav>
  );
};

export default Navbar;
