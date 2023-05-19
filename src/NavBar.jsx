import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import NavLinks from "./NavLinks";
const NavBar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handSubMenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handSubMenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav links */}
        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
