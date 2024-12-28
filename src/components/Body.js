import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => {
            // Filter logic
            const filteredRestaurant = resList.filter((res) => res?.info?.avgRating > 4.3);
            setListOfRestaurant(filteredRestaurant)
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filterBtn"
          onClick={() => {
            setListOfRestaurant(resList)
          }}
        >
          All Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

export const RESTAURANT_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
