//import { Fragment } from "react";

function ListGroup() {
  let items = ["Tokyo", "New York", "Kenya", "Paris", "London"];

  //const message = items.length === 0 ? <p>No item found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  /*if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );
    */
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
