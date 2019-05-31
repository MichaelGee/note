import React, { useState } from "react";
import Textarea from "./textarea";

const Note = () => {
  const [text, setText] = useState([
    {
      id: 1,
      content:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness"
    },
    {
      id: 2,
      content:
        "It was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period"
    }
  ]);

  const TextContent = ({ cont, index }) => {
    return (
      <div className='row '>
        <div className='col s12 m6 note-card'>
          <div className='card  darken-1'>
            <div className='card-content black-text'>
              <span className='card-title'>Card Title</span>
              <p>{cont.content}</p>
            </div>
            <div className='card-action'>
              {/* Modal Trigger */}
              <a className='modal-trigger edits' href='#modal1'>
                Edit
              </a>

              <a href='#' className='edits'>
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Textarea />
      {text.map((cont, index) => (
        <TextContent key={index} index={index} cont={cont} />
      ))}

      {/* Modal Structure */}
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <span className='card-title'>Make an Edit</span>
          <form class='col s12 center'>
            <div class='row'>
              <div className='input-field col s12'>
                <textarea
                  id='textarea2'
                  className='materialize-textarea'
                  data-length='120'
                />
                <label for='textarea2'>Textarea</label>
              </div>
            </div>

            <button
              className='btn waves-effect waves-light save-btn'
              type='submit'
              name='action'
            >
              Save
            </button>
          </form>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-green btn-flat'
          >
            Agree
          </a>
        </div>
      </div>
    </div>
  );
};

export default Note;
