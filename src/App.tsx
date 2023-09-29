import cartLogo from "./assets/cart.svg";
import "./App.css";
import ItemsInput from "./components/ItemsInput";
import { useEffect, useState } from "react";
import Lines from "./components/Lines";

const App = () => {
  const [items, setItems] = useState(0);
  const [lines, setLines] = useState<number[][]>([[], [], [], [], []]);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setLines((prevLines) =>
        prevLines.map((line) =>
          [line[0] - 1, ...line.slice(1)].filter((value) => value > 0)
        )
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={cartLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Choose the line with least amount of items</h1>
      <ItemsInput
        items={items}
        setItems={setItems}
        addPersonToLine={addPersonToLine}
      />
      <Lines lines={lines} />
    </>
  );
};

export default App;
