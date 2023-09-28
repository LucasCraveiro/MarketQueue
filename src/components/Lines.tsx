import React from "react";
import "../App.css";

interface LinesProps {
  lines: number[][];
  setLines: React.Dispatch<React.SetStateAction<number[][]>>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Lines: React.FC<LinesProps> = ({ lines, setLines }) => {
  return (
    <div className="lines">
      {lines.map((line, index) => (
        <div className="line" key={index}>
          x
        </div>
      ))}
    </div>
  );
};

export default Lines;
