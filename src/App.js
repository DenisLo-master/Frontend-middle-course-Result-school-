import { useState } from 'react';
import Task1 from './components/Task1.jsx';
import Task2 from './components/Task2.jsx';
import Task3 from './components/Task3.jsx';
import Task4 from './components/Task4.jsx';
import Task5 from './components/Task5.jsx';
import Task6 from './components/Task6.jsx';
import Popup from './components/UI/Popup.jsx';
import Signin from './containers/Signin.jsx';
import Signup from './containers/Signup.jsx';

function App() {
  const [signinShow, setSigninShow] = useState(false)
  const [signupShow, setSignupShow] = useState(false)

  function signinHandler(state) {
    console.log(state)
  }
  function signupHandler(state) {
    console.log(state)
  }

  const inputStyle = {
    radius: "sm",
    size: "sm",
  }

  return (
    <>
      {signinShow &&
        <Popup outsideClick={() => setSigninShow(false)}>
          <Signin onSubmit={signupHandler} inputStyle={inputStyle} />
        </Popup>}
      {signupShow &&
        <Popup outsideClick={() => setSignupShow(false)}>
          <Signup onSubmit={signupHandler} inputStyle={inputStyle} />
        </Popup>
      }
      <div style={{ display: "flex", flexDirection: "row-reverse", padding: "5px" }}>
        <button
          style={
            {
              margin: "2px",
              backgroundColor: "#fff",
              color: "#387aff",
              borderRadius: "5px",
              border: "1px solid #387aff"
            }}
          onClick={() => setSignupShow(true)}
        >SignUp
        </button>
        <button
          style={
            {
              margin: "2px",
              backgroundColor: "#387aff",
              color: "#fff",
              borderRadius: "5px",
              border: "1px solid #387aff"
            }}
          onClick={() => setSigninShow(true)}
        >SignIn
        </button>
      </div>
      <div style={
        {
          display: "flex",
          margin: "5px",
          height: "40vh",
          border: "1px solid black",
          flexDirection: "row",
          justifyContent: "space-around",

        }
      }>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №1</h2>
          <Task1 />
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №2</h2>
          <Task2 />
        </div>
      </div>
      <div style={
        {
          display: "flex",
          margin: "5px",
          height: "40vh",
          border: "1px solid black",
          flexDirection: "row",
          justifyContent: "space-around"
        }
      }>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №3</h2>
          <Task3 />
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №4</h2>
          <Task4 />
        </div>
      </div>
      <div style={
        {
          display: "flex",
          margin: "5px",
          height: "40vh",
          border: "1px solid black",
          flexDirection: "row",
          justifyContent: "space-around"
        }
      }>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №5</h2>
          <Task5 />
        </div>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2>Задание №6</h2>
          <Task6 />
        </div>
      </div>
    </>
  );
}

export default App