import React from "react";
import "../css/CreateAccount.css";

const CreateAccount = () => {
  return (
    <div className="create-account">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="we-re-here-to-give-wrapper">
                <p className="we-re-here-to-give">
                  We’re here to give you
                  <br />
                  the best ideas to relax.
                </p>
              </div>
              <div className="text-wrapper">Create account</div>
              <div className="frame">
                <div className="text-wrapper-2">Let’s get you started!</div>
                <input className="input-field-userName" placeholder="Name"></input>
              </div>
              <input className="input-field-Email" placeholder="Email"></input>
              <input type="password" className="input-field-Password" placeholder="Password"></input>
              <div className="frame-2">
                <div className="text-button">
                  <div className="text-wrapper-4">Create account</div>
                </div>
                <div className="description-link">
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-5">Already have an account?</div>
                  </div>
                  <div className="div-wrapper-2">
                    <div className="text-wrapper-6">Log in</div>
                  </div>
                </div>
              </div>
              <div className="text-wrapper-7">Business owner</div>
            </div>
          </div>
          <input type="radio" className="rectangle" />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount