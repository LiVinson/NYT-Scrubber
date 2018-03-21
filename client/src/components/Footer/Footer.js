import React from "react";
import "./Footer.css";

const Footer = ( {children} ) => {
return (
<nav className="navbar navbar-default .navbar-static-bottom">
  <div className="container">
    { children }
  </div>
</nav>
)

}

export default Footer;