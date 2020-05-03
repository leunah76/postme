import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

   const handleClose = () => {
     setAnchorEl(null);
   };

  function handleNote() {
      setAnchorEl(null);
      props.onChoose("note");
  }

  function handleList() {
      setAnchorEl(null);
      props.onChoose("list");
  }

  return (
    <div>
    <div class="menu">
      <Button style={{fontFamily: "Montserrat", fontSize: "1.2rem"}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Click to Create
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={{fontFamily: "Montserrat", fontSize: "1.2rem"}} name="note" onClick={handleNote}>New note</MenuItem>
        <MenuItem style={{fontFamily: "Montserrat", fontSize: "1.2rem"}} name="list" onClick={handleList}>New list</MenuItem>
      </Menu>
    </div>
    </div>
  );
}