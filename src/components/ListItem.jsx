import React, {useState} from "react";


function ListItem (props) {

  const [isDone, setIsDone] = useState(false);
  function check(index) {
    setIsDone(prevValue => {
      return !prevValue;
    }) 
  }

    return (
       <li className="post-list-item" onClick={check} 
       style={{textDecoration: isDone ? "line-through" : "none"}}
       >{props.text}</li>
    )
}

export default ListItem;