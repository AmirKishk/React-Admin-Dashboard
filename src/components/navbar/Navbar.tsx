import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Lamadmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon" />
        <img src="app.svg" alt="" className="icon" />
        <img src="expand.svg" alt="" className="icon" />
        <div className="notifications">
          <img src="notifications.svg" alt="" className="icon" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://media.licdn.com/dms/image/D4D03AQFXvqqfak22AQ/profile-displayphoto-shrink_800_800/0/1676542166194?e=2147483647&v=beta&t=_Y5lMSRysBmGuK6o5mQzwZACd5m1OO9XmfhY3yFTC-c"
            alt=""
          />
          <span>Panam</span>
        </div>
        <img src="settings.svg" alt="" />
      </div>
    </div>
  );
};

export default Navbar;
