import cartLogo from "./assets/cart.svg";
import "./App.css";
import ItemsInput from "./components/ItemsInput";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={cartLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <ItemsInput items={items} setItems={setItems} />
    </>
  );
};

export default App;
