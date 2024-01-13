import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Lamadmin</span>
      </div>
      <div className="icons"></div>
    </div>
  );
};

export default Navbar;