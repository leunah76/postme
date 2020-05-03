import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import SimpleMenu from "./Menu";
import CreateListArea from "./CreateListArea";
import List from "./List";
import CreateNoteArea from "./CreateNoteArea";
import Note from "./Note";

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

        </div>
       <Footer />
       </div>
    );
};

export default App;