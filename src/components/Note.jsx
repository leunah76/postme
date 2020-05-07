import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Grid from "@material-ui/core/Grid";


function Note(props) {

  function handleClick() {
    props.onDelete(props.id);
  }
    return (
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <div className="post">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleClick}>
            <DeleteOutlineIcon />
          </button>
         </div>
      </Grid>        
    );
};

export default Note;