import React from "react";
import sublinks from "./data";
import { useGlobalContext } from "./Context";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page, links } = item;
        return (
          <button
            onMouseEnter={() => setPageId(pageId)}
            key={pageId}
            className="nav-link"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
