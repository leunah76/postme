import React from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function Header() {
    return (
      <MuiThemeProvider theme={theme}>
        <Typography variant="h3" gutterBottom>
          <header>
           <h1>Post me</h1>
          </header>
        </Typography>
      </MuiThemeProvider>    
 
    );
};

export default Header;