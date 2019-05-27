import React from "react";
import Textarea from "./textarea";

const Note = () => {
  return (
    <div>
      <Textarea />
      <div className="row ">
        <div className="col s12 m6 note-card">
          <div className="card  darken-1">
            <div className="card-content black-text">
              <span className="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div className="card-action">
              {/* Modal Trigger */}
              <a className="modal-trigger edits" href="#modal1">
                Edit
              </a>

              <a href="#" className="edits">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Structure */}
      <div id="modal1" className="modal">
        <div className="modal-content">
          <span className="card-title">Make an Edit</span>
          <form class="col s12 center">
            <div class="row">
              <div class="input-field col s12">
                <textarea
                  id="textarea2"
                  class="materialize-textarea"
                  data-length="120"
                />
                <label for="textarea2">Textarea</label>
              </div>
            </div>

            <button
              class="btn waves-effect waves-light save-btn"
              type="submit"
              name="action"
            >
              Save
            </button>
          </form>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    </div>
  );
};

export default Note;
