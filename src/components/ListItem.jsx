import React, {useState} from "react";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function ListItem (props) {

  const [isDone, setIsDone] = useState(false);
  function check(index) {
    setIsDone(prevValue => {
      return !prevValue;
    }) 
  }

    return (
      <MuiThemeProvider theme={theme}>
      <Typography gutterBottom>
       <li className="post-list-item" onClick={check} 
       style={{textDecoration: isDone ? "line-through" : "none"}}
       >{props.text}</li>
      </Typography>
      </MuiThemeProvider>  
    )
}

export default ListItem;