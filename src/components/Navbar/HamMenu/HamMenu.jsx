import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { slideNavbar } from "./../../../actions/navActions";

function HamMenu() {
  const dispatch = useDispatch();

  const navIsOpen = useSelector((state) => state.navbar.navIsOpen);

  const handleClick = () => {
    //toggle slide navbar mobile
    dispatch(slideNavbar(!navIsOpen));
  };

  return (
    <div className="hamg">
      <div
        onClick={handleClick}
        className={`menu-btn ${navIsOpen ? "open" : ""}`}
      >
        <div className="burger"></div>
      </div>
    </div>
  );
}

export default HamMenu;
