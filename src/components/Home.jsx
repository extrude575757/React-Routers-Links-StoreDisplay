import React from "react";
import { useHistory } from "react-router-dom";

function Home(props) {
  console.log(props);

  // history from Hook is the same as props.history. You may use either, but you must use the hook when you don't have access to the react router props.
  const history = useHistory();
  console.log(history);
  const routeToShop = () => {
    history.push("/shop");
  };
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button className="md-button shop-button" onClick={routeToShop}>
        Shop now!
      </button>
    </div>
  );
}

export default Home;
