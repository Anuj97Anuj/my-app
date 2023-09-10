// import logo from "./logo.svg";
import "./App.css";

let name = "Anuj";
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
      </nav>
      <div className="container"></div>
      <h1>Hello {name}</h1>
      <p>This is my first react app</p>
    </>
  );
}

export default App;
