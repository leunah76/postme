import React, {useState} from "react";

function CreateNoteArea(props) {
    
    const [isExpanded, setIsExpanded] = useState(false);

    function expand() {
        setIsExpanded(true);
    }

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })

    function createNote(event) {
        const {name, value} = event.target;
        setNewNote(function(prevNote) {
            return {...prevNote,
            [name]: value
            }
        })
        
    }

    function submitNote(event) {
        props.onAdd(newNote);
        setNewNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
      <div>
          <form action="">             
              <input name="title" placeholder="Title" type="text"
              onChange={createNote}
              value={newNote.title}/>
              <textarea name="content" placeholder="Contents" id="" cols="30" 
              onClick={expand}
              rows={isExpanded ? "5" : "1"}
              onChange={createNote}
              value={newNote.content}></textarea>
              <button className="submit-button"
               onClick={submitNote}>
               Post me
              </button>
          </form>
      </div>

    )

}

export default CreateNoteArea;