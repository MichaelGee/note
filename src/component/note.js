import React, { useState, useEffect } from "react";
import TextArea from "./textarea";
import fire from "./fireConfig";

const Note = () => {
  const [text, setText] = useState([
    {
      content: " "
    }
  ]);

  /*useEffect(() => {
    fire.getNote().then(text);
  });*/

  const TextContent = ({ cont, index, deleteNote }) => {
    if (cont.content === " ") {
      return null;
    } else {
      return (
        <div className="row ">
          <div className="col s12 m6 note-card">
            <div className="card  darken-1">
              <div className="card-content black-text">
                <p>{cont.content}</p>
              </div>
              <div className="card-action">
                <a href="#" className="edits" onClick={() => deleteNote(index)}>
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

    fire.note(content);
    fire.deleteNote(content);
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
    </div>
  );
};

export default Note;
