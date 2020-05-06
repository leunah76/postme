import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

function CreateListArea(props) {
 
  const [listItem, setListItem] = useState("");
  const [items, setItems] = useState([]);
  const [newList, setNewList] = useState({
    title: "",
    content: []
  })

  function createList(event) {
    const {value} = event.target;
    setNewList(function(prevList) {
        return {...prevList,
          title: value
        }
    })
  }
 
  function getItem(event) {
    const {value} = event.target;
    setListItem(value);
    setNewList(function(prevList) {
        return {...prevList, 
            content: value
        }
    })
  }

  function addItem(event) {

    setItems(prevItems => {
        return [...prevItems, listItem];
      });
    
    setNewList(function(prevList) {
        return {...prevList,
          content: items
        } 
    })
    event.preventDefault();
    setListItem("");
  }

  function deleteItem(id) {
    setItems(function(prevItems) {
      return prevItems.filter(function(item, index) {
        return index !== id;
      });
    });
  }

  const [isConfirmed, setIsConfirmed] = useState(false);

  function addList(event) {
    setNewList(function(prevList) {
        return {...prevList,
        content: items
        }
    })
    event.preventDefault();
    setIsConfirmed(true);
  }

  function submitList(event) {
    props.onAdd(newList);
    setItems([])
    setNewList({
        title: "",
        content: []
    })
    event.preventDefault();
  }

  return (
    <Grid container justify="center">
    <Grid item xs={12} sm={12} md={12} lg={5}>
    <MuiThemeProvider theme={theme}>
    <Typography> 
      <form>
          <div >
              <div>
                 <input placeholder="Name of list"
                  onChange={createList} type="text" 
                  value={newList.title} />
                 <input className="list-input" placeholder="List items"
                  onChange={getItem} type="text" 
                  value={listItem} />
                 <button className="add-button"onClick={addItem}>+</button>
              </div>
              <div >
                 <ul className="list-area">
                    {items.map((listItem, index) => (
                      <div 
                          onClick={function() {
                            deleteItem(index);
                          }}
                         >
                          <li className="lists" style={{textDecoration: "none"}}>{listItem}</li>
                      </div>
                    ))}
                 </ul>
              </div>
             <button className="confirm-button" onClick={addList}>Confirm List</button>
           </div>
            {isConfirmed &&  
             <button className="submit-button" 
               onClick={submitList}
               >Post me
             </button>} 
       </form>
       </Typography> 
       </MuiThemeProvider> 
    </Grid>
  </Grid>  
  );

}

export default CreateListArea;