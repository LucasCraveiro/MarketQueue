import React from "react";
import "../App.css";

interface LinesProps {
  lines: number[][];
}

const Lines: React.FC<LinesProps> = ({ lines }) => {
  return (
    <div className="lines">
      {lines.map((line, index) => (
        <div className="line" key={index}>
          {line.map((items) => (
            <div key={index + self.crypto.randomUUID()}>{items}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Lines;
