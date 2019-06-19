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
      <div className="row">
        <form className="col s12 center" onSubmit={handleClick}>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea2"
                className="materialize-textarea"
                data-length="120"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <label for="textarea2">Type your note..</label>
            </div>
          </div>

          <button
            className="btn waves-effect waves-light save-btn"
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

export default TextArea;
