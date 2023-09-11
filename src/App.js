// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";

function App() {
  // const title = "TextUtils";
  // const aboutText = "About TextUtils";
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Textform heading="Login" mode={mode} />
        {/* <About /> */}
      </div>

      {/* <Navbar title="TextUtils" /> */}

      {/* <Navbar /> */}
    </>
  );
}

export default App;
