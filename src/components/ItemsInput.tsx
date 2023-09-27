import React from "react";
import "../App.css";

interface ItemInputProps {
  items: number;
  setItems: React.Dispatch<React.SetStateAction<number>>;
}

const ItemInput: React.FC<ItemInputProps> = ({ items, setItems }) => {
  return (
    <form>
      <input
        className="inputItems"
        required
        min={0}
        type="number"
        value={items}
        onChange={(e) => setItems(e.currentTarget.valueAsNumber)}
        placeholder="Enter the number of items"
        name="item"
      />
      <button className={"checkout"} type="submit">
        Checkout
      </button>
    </form>
  );
};

export default ItemInput;
