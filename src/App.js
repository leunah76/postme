import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SimpleMenu from "./components/Menu";
import CreateListArea from "./components/CreateListArea";
import List from "./components/List";
import CreateNoteArea from "./components/CreateNoteArea";
import Note from "./components/Note";
import Grid from "@material-ui/core/Grid";

function App() {

  const [isListChosen, setIsListChosen] = useState(false);
  const [isNoteChosen, setIsNoteChosen] = useState(false);
  function chooseCreateArea(chosenmenu) {
     if (chosenmenu === "list") {
       setIsListChosen(true);
       setIsNoteChosen(false);
     } else if (chosenmenu === "note") {
       setIsNoteChosen(true);
       setIsListChosen(false);
     }
  }

  //When List is added
  const [lists, setLists] = useState([]);
  function addList(newList) {
    setLists(function(prevList) {
      return [...prevList, newList];
    })
  }

  function deleteList(id) {
    setLists(function(lists) {
      return (
          lists.filter(function(list, index) {
            return index !== id;
          })
      )
    })
  }

  //When Note is added
  const [notes, setNotes] = useState([])
  function addNote(newNote) {
     setNotes(function(prevNotes) {
       return [...prevNotes, newNote];
     })
  }
  
  function deleteNote(id) {
    setNotes(function(notes) {
      return (
          notes.filter(function(note, index) {
            return index !== id;
          })
      )
    })
  }

    return (
      <div>
        <div>
          <Header />
          <SimpleMenu 
           onChoose={chooseCreateArea}/>
           {isListChosen ?           
           <CreateListArea 
           onAdd={addList}/> : 
           <CreateNoteArea 
           onAdd={addNote}/>}

          <Grid container spacing={3} direction="row" justify="center">
           {lists.map(function (list, index) {
             return (
                <List 
                 key={index}
                 id={index}
                 title={list.title}
                 content={list.content}
                 onDelete={deleteList}
                />
              )
            })}
          </Grid>

          <Grid container spacing={3} direction="row" justify="center">
           {notes.map(function (note, index) {
              return (
                <Note
                 key={index}
                 id={index}
                 title={note.title}
                 content={note.content}
                 onDelete={deleteNote}
                 />
              )
            })}
          </Grid>

        </div>
       <Footer />
       </div>
    );
};

export default App;