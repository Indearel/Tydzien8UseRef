import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function SignUpForm({ isVisible, onSignUp}) {
  const emailInput = useRef();
  useEffect(() => {
      if (isVisible) {
        emailInput.current.focus();
      }
    }, [isVisible]
  );
  return (
    <form style={{ display: isVisible ? "block" : "none" }}>
      <label>
        Email
        <input ref={emailInput} />
      </label>
      < br />
      <button onCLick={onSignUp}>Sign Up</button>
    </form>
  );
}

function App() {
  const [isSingUpFormVisible, setSignUpFormVisibility] = useState(false);
  const timeoutId = useRef();
  useEffect(() => {
    timeoutId.current = setTimeout(() => setSignUpFormVisibility(true), 3000)
    return () => {
      clearTimeout(timeoutId.current);
    }
  }, [])
  return (
    <div className="App">
      <SignUpForm isVisible={isSingUpFormVisible}
       onSignUp={(event) => {
        event.preventDefault();
        setSignUpFormVisibility(false);
        clearTimeout(timeoutId)
      }}/>
      <button onClick = {() => setSignUpFormVisibility(prev => !prev)}>
        Show sign up form
        </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
