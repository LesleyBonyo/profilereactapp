//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["Tokyo", "New York", "Kenya", "Paris", "London"];
  let selectedIndex = 0;
  //hook
  useState;
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
  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
