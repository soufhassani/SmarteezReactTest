import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const buttons = {
    btn1: {
      id: "increment",
      text: "+",
      callback: () => console.log("clicked increment"),
    },
    btn2: {
      id: "decrement",
      text: "-",
      callback: () => console.log("clicked decrement"),
    },
  };
  return (
    <main>
      <div className="buttons-container">
        <Button {...buttons.btn1} />
        <Button {...buttons.btn2} />
      </div>
    </main>
  );
}

export default App;
