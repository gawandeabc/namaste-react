import React, { useState } from "react";
import ReactSwitch from "react-switch";
import RestaurantCard from "./RestaurantCard";
import resLists from "../utils/mockData";

const Body = () => {
  //local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resLists);
  const [checked, setChecked] = useState(false);

  const handleChange = (val) => {
    setChecked(val);
    if (val == true) {
      const filteredList = listOfRestaurants.filter(
        (res) => res.data.avgRating >= 4
      );
      setListOfRestaurants(filteredList);
    } else {
      setListOfRestaurants(resLists);
    }
  };

  return (
    <div className="body">  
        <div className="switch-btn">
        <h3>Top Restaurants ({listOfRestaurants.length})</h3>
          <ReactSwitch checked={checked} onChange={handleChange} />
        </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
