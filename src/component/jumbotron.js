import React from "react";

const Jumbotron = () => {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h2>Note</h2>
            </div>
            <div className="col-6">
              <p className="signup text-right" data-target="modal1">
                <a data-toggle="modal" data-target="#exampleModal">
                  Sign up
                </a>
              </p>
            </div>
          </div>

          <h1 className="introtext text-center">Write down your thoughts!</h1>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
