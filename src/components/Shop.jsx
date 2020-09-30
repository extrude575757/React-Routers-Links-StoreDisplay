import React from "react";
import { Link } from "react-router-dom";

// what do we need to add to this component so we can map through items?

function Shop(props) {
  console.log(props);
  return (
    <div className="items-list-wrapper">
      {props.items.map((item) => (
        <Link to={`/shop/${item.id}`}>
          <div className="item-card" key={item.id}>
            <img
              className="item-list-image"
              src={item.imageUrl}
              alt={item.name}
            />
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Shop;
