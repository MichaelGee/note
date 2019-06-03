import React, { useState } from "react";

const TextArea = ({ addNote }) => {
  const [value, setValue] = useState("");

  const handleClick = e => {
    e.preventDefault();
    if (!value) return;
    addNote(value);
    setValue("");
  };

  return (
    <div>
      <div class='row'>
        <form class='col s12 center' onSubmit={handleClick}>
          <div class='row'>
            <div class='input-field col s12'>
              <textarea
                id='textarea2'
                class='materialize-textarea'
                data-length='120'
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <label for='textarea2'>Type your note..</label>
            </div>
          </div>

          <button
            class='btn waves-effect waves-light save-btn'
            type='submit'
            name='action'
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default TextArea;
