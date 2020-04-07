import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { slideNavbar } from "./../../../actions/navActions";
function HamMenu() {
  const dispatch = useDispatch();
  const navIsOpen = useSelector((state) => state.navbar.navIsOpen);
  const handleClick = () => {
    dispatch(slideNavbar(!navIsOpen));
  };
  return (
    <div className="hamg">
      <div
        onClick={handleClick}
        className={`${navIsOpen ? "menu-btn open" : "menu-btn"}`}
      >
        <div className="menu-btn__burger"></div>
      </div>
    </div>
  );
}

export default HamMenu;
