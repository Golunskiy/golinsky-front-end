import React from "react";
import { NavLink } from "react-router-dom";

const arrowMiniIcon = "https://res.cloudinary.com/dw0qzruxp/image/upload/v1685200334/arrowMini_cxezq5.svg";

function NamePage({ children }) {
  return (
    <div className="page-name">
      <NavLink to="/">
        <button className="button-card button-card__active">
          <img src={arrowMiniIcon} alt="" />
        </button>
      </NavLink>
      <h1>{children}</h1>
    </div>
  );
}

export default NamePage;
