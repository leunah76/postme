import React from "react";


function Footer() {

    const day = new Date();
    const year = day.getFullYear();

    return (
          <footer>
            <h3>Copyright © {year}</h3>
          </footer>
    );
};

export default Footer;
