import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const clickAnimation = (target) => {
    const addBoxShadow = `inset 0 0 0px 40px rgba(255,255,255,0.2)`;
    target.style.boxShadow = addBoxShadow;
    setTimeout(() => (target.style.boxShadow = ""), 100);
  };

  const incrementHandler = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
    clickAnimation(e.currentTarget);
  };

  const decrementHandler = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
    clickAnimation(e.currentTarget);
  };

  const buttons = {
    incrementBtn: {
      id: "increment",
      text: "+",
      callback: incrementHandler,
    },
    decrementBtn: {
      id: "decrement",
      text: "-",
      callback: decrementHandler,
    },
  };

  const addCounterClass = counter > 0 ? "red" : counter < 0 ? "blue" : "";

  return (
    <main>
      <div className="content-container">
        <h1 className={addCounterClass}>{counter}</h1>
      </div>
      <div className="buttons-container">
        <Button {...buttons.decrementBtn} />
        <Button {...buttons.incrementBtn} />
      </div>
    </main>
  );
}

export default App;
