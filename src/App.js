// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";

function App() {
  const title = "TextUtils";
  const aboutText = "About TextUtils";
  return (
    <>
      <Navbar title={title} aboutText={aboutText} />
      <div className="container my-3">
        <Textform heading="Login" />
        {/* <About /> */}
      </div>

      {/* <Navbar title="TextUtils" /> */}

      {/* <Navbar /> */}
    </>
  );
}

export default App;
