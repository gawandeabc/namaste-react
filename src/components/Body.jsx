import RestaurantCard from "./RestaurantCard";
import resLists from "../utils/mockData";

import { useState } from "react";

const Body = () => {
  //local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resLists);

  return (
    <div className="body">
      <div className="filer">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList =  listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
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
