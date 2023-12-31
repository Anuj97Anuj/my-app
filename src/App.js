// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const title = "TextUtils";
  // const aboutText = "About TextUtils";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");

      // setInterval(() => {
      //   document.title = "TextUtils - Dark Mode";
      // }, 1500);
      // setInterval(() => {
      //   document.title = "TextUtils - Light Mode";
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Navbar title="TextUtils" /> */}
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform heading="Login" mode={mode} showAlert={showAlert} />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
