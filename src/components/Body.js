import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  const [filterRestaurant, setFilterRestaurant] = useState(resList)
  const [searchText, setSearchText] = useState('')


  return (
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        <button onClick={() => {
          const filterData = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilterRestaurant(filterData)
        }}>Search</button>


        <button
          className="filterBtn"
          onClick={() => {
            // Filter logic
            const filteredRestaurant = resList.filter((res) => res?.info?.avgRating > 4.3);
            setFilterRestaurant(filteredRestaurant)
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          className="filterBtn"
          onClick={() => {
            setFilterRestaurant(resList)
          }}
        >
          All Restaurant
        </button>

      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

export const RESTAURANT_IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/";
