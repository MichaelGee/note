import React from "react";

const Note = () => {
  return (
    <div>
      <div class="row">
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
    </div>
  );
};

export default Note;
