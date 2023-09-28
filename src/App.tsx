import cartLogo from "./assets/cart.svg";
import "./App.css";
import ItemsInput from "./components/ItemsInput";
import { useState } from "react";
import Lines from "./components/Lines";

const App = () => {
  const [items, setItems] = useState(0);
  const [lines, setLines] = useState<number[][]>([
    [10, 5, 2],
    [1],
    [2],
    [3],
    [4],
  ]);

  const addPersonToLine = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let leastItemsAmount = 1e9;
    let lineWithLeast: number[] | undefined;

    for (const line of lines) {
      const totalInLine = line.reduce((sum, value) => sum + value, 0);
      if (totalInLine < leastItemsAmount) {
        leastItemsAmount = totalInLine;
        lineWithLeast = line;
      }
    }

    if (!lineWithLeast) return;

    setLines((prevLines) =>
      prevLines.map((line) =>
        line === lineWithLeast ? [...line, items] : line
      )
    );
  };
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={cartLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <ItemsInput
        items={items}
        setItems={setItems}
        addPersonToLine={addPersonToLine}
      />
      <Lines lines={lines} setLines={setLines} />
    </>
  );
};

export default App;
