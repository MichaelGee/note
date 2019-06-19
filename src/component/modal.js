import React from "react";

const Modal = () => {
  return (
    /* Modal Structure */
    <div>
      <div id='modal1' className='modal'>
        <div className='modal-content'>
          <form class='col s12 center'>
            <div class='row'>
              <div className='input-field col s12'>
                <textarea
                  id='textarea2'
                  className='materialize-textarea'
                  data-length='120'
                />
                <label for='textarea2'>Make an Edit..</label>
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

export default Modal;
