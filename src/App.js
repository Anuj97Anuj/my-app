// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  const title = "TextUtils";
  const aboutText = "About TextUtils";
  return (
    <>
      <Navbar title={title} aboutText={aboutText} />
      <div className="container my-3">
        <Textform heading="Login" />
      </div>

      {/* <Navbar title="TextUtils" /> */}

      {/* <Navbar /> */}
    </>
  );
}

export default App;

