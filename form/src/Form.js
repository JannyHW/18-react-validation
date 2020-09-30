import React, { useState } from "react";
import validator from "validator";

//==create form Validation==

function Form() {
  //set normal state for all 6 inputs
  const [nameText, setName] = useState("");
  const [emailText, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [website, setWebsite] = useState("");
  //set valid state for all 6 input
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [userNameValid, setUserNameValid] = useState(true);
  const [websiteValid, setWebsiteValid] = useState(true);
  //set state for all 6 labels
  const [nameLabel, setNameLabel] = useState("Name");
  const [emailLabel, setEmailLabel] = useState("Email");
  const [passwordLabel, setPasswordLabel] = useState("Password");
  const [confirmPasswordLabel, setConfirmPasswordLabel] = useState(
    "Confirm Password"
  );
  const [userNameLabel, setUserNameLabel] = useState("Username");
  const [websiteLabel, setWebsiteLabel] = useState("Website");
  //set state for profile heading
  const [profile, setProfile] = useState("Profile Form - All fields required");
  //set state for errors
  const [errors, setErrors] = useState(true);

  //start with no filled inputs
  let correctInputs = 0;

  function handleSubmit(e) {
    //prevent a browser reload when "submit" button is clicked
    e.preventDefault();
    //1. filled name?
    if (validator.isEmpty(nameText)) {
      setNameValid(false);
      setNameLabel("Name - Cannot be blank");
    } else {
      setNameValid(true);
      setNameLabel("Name");
      setName(nameText);
      correctInputs += 1;
      inputsCorrect();
    }
    //2. filled email?
    if (!validator.isEmail(emailText)) {
      setEmailValid(false);
      setEmailLabel("Email - Must be a valid email");
      setEmail("");
    } else {
      setEmailValid(true);
      setEmailLabel("Email");
      setEmail(emailText);
      correctInputs += 1;
      inputsCorrect();
    }
    //3. filled userName?
    if (validator.isEmpty(userName)) {
      setUserNameValid(false);
      setUserNameLabel("Username - Cannot be blank");
    } else {
      setUserName(userName);
      setUserNameValid(true);
      setUserNameLabel("Username");
      correctInputs += 1;
      inputsCorrect();
    }
    //4. filled password?
    if (validator.isEmpty(password)) {
      setPasswordValid(false);
      setPasswordLabel("Password - Cannot be blank");
    } else {
      setPassword(password);
      setPasswordValid(true);
      setPasswordLabel("Password");
      correctInputs += 1;
      inputsCorrect();
    }
    //5.1 filled password?
    if (validator.isEmpty(confirmPassword)) {
      setConfirmPasswordValid(false);
      setConfirmPasswordLabel("Confirm Password - Cannot be blank");
    } else {
      setConfirmPassword(confirmPassword);
      setConfirmPasswordValid(true);
      setConfirmPasswordLabel("Confirm Password");
      correctInputs += 1;
      inputsCorrect();
    }
    //5.2 matched password with #4?
    if (confirmPassword !== password) {
      setConfirmPasswordValid(false);
      setConfirmPasswordLabel("Confirm Password - Must match password");
    }
    //6. filled url?
    if (!validator.isURL(website)) {
      setWebsiteValid(false);
      setWebsiteLabel("Website - Must be a valid url");
      setWebsite("");
    } else {
      setWebsite(website);
      setWebsiteValid(true);
      setWebsiteLabel("website");
      correctInputs += 1;
      inputsCorrect();
    }
    //check if 6 inputs are filled
    function inputsCorrect() {
      correctInputs === 6
        ? setErrors(false)
        : setProfile("Thank You, your profile has been updated!");
    }
  }

  return (
    //==create a HTML Form here==
    <form onSubmit={handleSubmit}>
      <h3 id="heading">{profile}</h3>
      <div className={errors ? "" : "thanks"}>
        <div id="container">
          <label htmlFor="name" className={nameValid ? "" : "textRed"}>
            {nameLabel}
          </label>
          <input
            id="name"
            type="text"
            placeholder=" Janny"
            value={nameText}
            className={nameValid ? "" : "borderRed"}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className={emailValid ? "" : "textRed"}>
            {emailLabel}
          </label>
          <input
            id="email"
            type="email"
            placeholder=" email@test.com"
            value={emailText}
            className={emailValid ? "" : "borderRed"}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="username" className={userNameValid ? "" : "textRed"}>
            {userNameLabel}
          </label>
          <input
            id="text"
            type="username"
            placeholder=" myusername"
            value={userName}
            className={userNameValid ? "" : "borderRed"}
            onChange={(e) => setUserName(e.target.value)}
          />

          <label htmlFor="password" className={passwordValid ? "" : "textRed"}>
            {passwordLabel}
          </label>
          <input
            id="password"
            type="password"
            placeholder=" &bull; &bull; &bull; &bull;"
            value={password}
            className={passwordValid ? "" : "borderRed"}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label
            htmlFor="confirmPassword"
            className={confirmPasswordValid ? "" : "textRed"}
          >
            {confirmPasswordLabel}
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder=" &bull; &bull; &bull; &bull;"
            value={confirmPassword}
            className={confirmPasswordValid ? "" : "borderRed"}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label htmlFor="website" className={websiteValid ? "" : "textRed"}>
            {websiteLabel}
          </label>
          <input
            id="website"
            type="website"
            placeholder=" http://mywebsite.com/"
            value={website}
            className={websiteValid ? "" : "borderRed"}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <button id="submitBtn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
