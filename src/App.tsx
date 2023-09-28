import cartLogo from "./assets/cart.svg";
import "./App.css";
import ItemsInput from "./components/ItemsInput";
import { useState } from "react";
import Lines from "./components/Lines";

const App = () => {
  const [items, setItems] = useState(0);
  const [lines, setLines] = useState<number[][]>([[], [], [], [], []]);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={cartLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <ItemsInput items={items} setItems={setItems} />
      <Lines lines={lines} setLines={setLines} />
    </>
  );
};

export default App;
