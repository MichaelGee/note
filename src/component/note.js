import React, { useState } from "react";
import TextArea from "./textarea";
import Modal from "./modal";

const Note = () => {
  const [text, setText] = useState([
    {
      content: " "
    }
  ]);

  const TextContent = ({ cont, index, deleteNote }) => {
    if (cont.content === " ") {
      return null;
    } else {
      return (
        <div className='row '>
          <div className='col s12 m6 note-card'>
            <div className='card  darken-1'>
              <div className='card-content black-text'>
                <p>{cont.content}</p>
              </div>
              <div className='card-action'>
                {/* Modal Trigger */}
                <a className='modal-trigger edits' href='#modal1'>
                  Edit
                </a>

                <a href='#' className='edits' onClick={() => deleteNote(index)}>
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  /* Textarea */

  const addNote = content => {
    const newNote = [...text];
    newNote.unshift({ content });
    setText(newNote);
  };

  const deleteNote = index => {
    const newNote = [...text];
    newNote.splice(index, 1);
    setText(newNote);
  };
  return (
    <div>
      <TextArea addNote={addNote} />
      {text.map((cont, index) => (
        <TextContent
          key={index}
          index={index}
          cont={cont}
          deleteNote={deleteNote}
        />
      ))}

      <Modal />
    </div>
  );
};

export default Note;
