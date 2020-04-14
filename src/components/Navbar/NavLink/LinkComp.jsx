import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { slideNavbar } from "./../../../actions/navActions";

function LinkComp({ to, iconName, name }) {
  const dispatch = useDispatch();

  const readLaterBooks = useSelector((state) => state.readLater.readLaterBooks);

  const handleClick = () => {
    //hide navbar(mobile) on link click
    dispatch(slideNavbar());
  };

  return (
    <li>
      <NavLink onClick={handleClick} exact to={to} activeClassName="activeLink">
        <i samesite="None" className={`${iconName} link-icon`}></i>
        <span className="link-text">{name}</span>
        {name === "Read Later" ? (
          <span className="counter">{readLaterBooks.length}</span>
        ) : null}
      </NavLink>
    </li>
  );
}

export default LinkComp;
