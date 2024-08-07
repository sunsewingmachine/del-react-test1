function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <h3>No items</h3> : null}
      {items.length !== 0 && <h3>Some items</h3>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              key={index}
              className="list-group-item"
              onClick={() => console.log(item)}
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
