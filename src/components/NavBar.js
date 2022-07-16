import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navElements= links.map((link) => {
    const hyperLink = '#'+link

    return <a key= {link} href={hyperLink}>{link}</a>;
  }
  );
  return (
    <nav>
    {navElements}
    </nav>
  );
}




export default NavBar;
