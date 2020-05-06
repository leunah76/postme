import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Footer() {

    const day = new Date();
    const year = day.getFullYear();

    return (
      <MuiThemeProvider theme={theme}>
        <Typography variant="inherit" gutterBottom>
          <footer>
            <p>Copyright © {year}</p>
          </footer>
        </Typography>
      </MuiThemeProvider>  
    );
};

export default Footer;
