import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  OnSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, OnSelectItem }: Props) {
  const [selectedIndex, SetselectedIndex] = useState(1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <h3>No items</h3> : null}
      {items.length !== 0 && <h3>Some items</h3>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className={
                index == selectedIndex
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                OnSelectItem(item);
                SetselectedIndex(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
