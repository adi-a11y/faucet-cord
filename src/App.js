import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import swal from "sweetalert";
import style from "./style.css";

const App = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const url = process.env.URL;
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onHandleClick = async (e) => {
    let payload = {
      name:`${name}`,
      address: `${address}`,
      email:`${email}`
    };
    console.log(payload)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "origin":"localhost:3001/"
      },
      body: JSON.stringify(payload),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.status == "sent") {
          swal({
            title: "Verification email sent!",
            text: "A verification mail has been sent to your email,\n please verify your email to get the funds",
            icon: "success",
          });
        } else {
          swal({
            title: "Failed!",
            text: `${data.status}`,
            icon: "error",
          });
        }
      });
  };


  return (
    <div className="f-screen">
      <div>
        <img className="p-3" src="Group 6685.svg" />
        <a href="https://cord.network/" className="links p-3">
          About CORD
        </a>
        <a href="https://dhiway.com/markstudio/" className="links p-3">
          About #Mark Studio
        </a>
      </div>
      <div>
        <div className="vc-img col-md-12">
          <img className="heading" src="vc2.png"></img>
        </div>
        <div className="bottom-contents">
          <div className="outer-area">
            <div className="col-md-12 d-flex"></div>
            <div style={{ textAlign: "center" }}>
              <br />
              <br />
              <h3 style={{ color: "white" }}>Enter the details</h3>
              <br />

              <input
                type="text"
                placeholder= 'Enter your name'
                style={{ width: "80%", height: "100%" }}
                value={name}
                onChange={handleNameChange}
              />
              <br/>
              <br/>
              <input
                type="text"
                placeholder= 'Enter your cord address'
                style={{ width: "80%", height: "100%" }}
                value={address}
                onChange={handleAddressChange}
              />
              <br/>
              <br/>
              <input
                type="text"
                placeholder= 'Enter your email'
                style={{ width: "80%", height: "100%" }}
                value={email}
                onChange={handleEmailChange}
              />
              <br />
              <br />
              <br />
              <br />
              <button onClick={() => onHandleClick()} class="btn">
                <span>Fund me!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
