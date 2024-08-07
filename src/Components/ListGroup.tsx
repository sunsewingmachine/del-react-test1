const justWasteConst = "Wate";

function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  items = [];

  if (items.length === 0) {
    return (
      <>
        <h1>List</h1>
        <h3>No items</h3>
      </>
    );
  }

  return (
    <>
      <h1>List</h1>

      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
