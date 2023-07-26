import { MouseEvent } from "react";

const handleClick = (event: MouseEvent) => console.log(event);

function ListGroup() {
  let items = ["Leh", "Ladakh", "Shimla", "Manali", "Shillong"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
