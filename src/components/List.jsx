import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ListItem from "./ListItem";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function List(props) {

  function handleClick() {
    props.onDelete(props.id);
  }
  
    return (
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <MuiThemeProvider theme={theme}>
          <Typography gutterBottom>
        <div className="post">
          <h1>{props.title}</h1>
          <ul className="post-list-content">
              {props.content.map((listItem) => (
                <div>
                    <ListItem text={listItem} />
                </div>
              ))}
          </ul>
          <button onClick={handleClick}>
            <DeleteOutlineIcon />
          </button>
        </div>
        </Typography>
        </MuiThemeProvider>
      </Grid>
    );
};

export default List;