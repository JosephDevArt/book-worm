import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { slideNavbar } from "./../../../actions/navActions";
function LinkComp({ to, iconName, name }) {
  const readLaterBooks = useSelector(
    (state) => state.readLaterReducer.readLaterBooks
  );
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(slideNavbar());
  };
  return (
    <li>
      <NavLink onClick={handleClick} exact to={to} activeClassName="activeLink">
        <i className={`${iconName} link_icon`}></i>
        <span className="link_text">{name}</span>
        {name === "Read Later" ? (
          <span className="counter">{readLaterBooks.length}</span>
        ) : null}
      </NavLink>
    </li>
  );
}

export default LinkComp;
