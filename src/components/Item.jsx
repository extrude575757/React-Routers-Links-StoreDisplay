import React from "react";
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";

// we will be importing and adding a lot of items to this component
function Item(props) {
  // props.items --> all of our items
  // shopItem --> the item that matches the id in the URL

  // useParams https://reacttraining.com/react-router/web/api/Hooks/useparams
  // returns an object of key/value pairs of URL parameters (keys declared with colon in Route path). Use it to access match.params of the current <Route>.
  // we need to use useParams when we do not use a render method of route (component= or render= in Route JSX)
  const { itemId } = useParams(); // { itemId: "2"}

  // useRouteMatch https://reacttraining.com/react-router/web/api/Hooks/useroutematch
  // useRouteMatch hook attempts to match the current URL in the same way that a <Route> would
  // returns Object -> {path: ...., url: ...., ...}
  // it provides a path (like what we declare in a Route that made Item render "/shop/:banana"), and the current url (what we see in the browser)
  const { path, url } = useRouteMatch(); // { path: "..", url: "..."}

  /*
  const routeMatch = useRouteMatch(); // { path: "..", url: "..."}
  .... {routeMatch.path}
  */

  // pull array of objects from props.items (this is the products stored in App state)
  // iterate over each object to find the object that has the same id as the one in the URL (params.itemID)
  // .find() is arr fn that returns first valid result. id is unique so this should return the correct object
  // compare item.id is a number and params.banana is a string, so make the string a number to compare values correctly.
  const shopItem = props.items.find((item) => item.id === Number(itemId)); // {item object}
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        {/* NavLinks are the same as Links except that if the URL matches the TO (same way that URL matches path), then the class ".active" is applied to that <a>*/}
        <NavLink exact to={url}>
          Description
        </NavLink>
        <NavLink to={`${url}/shipping`}>Shipping</NavLink>
      </nav>
      {/* Nested Routing Routes go here -> Remember! These turn into the component if path matches */}
      {/* These Routes create "nested routes". Meaning that when Item is
      rendered, the Routes are declared and then the url is compared against
      these new Routes. If there is a match that in addition to the Item
      rendering, then the matching sub-component will render as well.*/}
      {/* Because the itemdescription path matches the path to reach Item (in App.js), item descr will show by default */}
      <Route exact path={path}>
        <ItemDescription item={shopItem} />
      </Route>

      {/* ItemShipping path matches the path to reach Item (in App.js) + "/shipping" */}
      <Route path={`${path}/shipping`}>
        <ItemShipping item={shopItem} />
      </Route>
    </div>
  );
}
export default Item;
