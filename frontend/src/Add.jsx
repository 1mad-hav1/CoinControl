import React, { useState } from "react";
import "./add.css";

  function App() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "Steve Abraham Wilson",
        password: "imthedanger"
      },
      {
        username: "Karthik Dileep",
        password: "saycheese"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div  className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required placeholder='Enter Your UserName'/>
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required placeholder='Enter Your Password'/>
            {renderErrorMessage("pass")}
          </div>
          <div class="userlogin">
          <a href="#userlogin">Not an Admin</a>
          </div>
          <div className="button-container">
            <input type="submit" value="Login"/> 
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        {/* <div className="login-form"> */}
          <div className="title">Sign-In</div>
          {isSubmitted ? window.location.replace("/Admin") : renderForm}
        </div>
      // </div>
    );
  }
  
  export default App;