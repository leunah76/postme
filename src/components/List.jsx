import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ListItem from "./ListItem";

function List(props) {

  function handleClick() {
    props.onDelete(props.id);
  }
  
    return (
        <div className="post">
          <h1>{props.title}</h1>
          
          <ul className="post-list-area">
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

    );
};

export default List;