import { useState } from "react";
import resList from "../utils/mockData";
import RestaurentCard from "./RestaurantCard";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <button
                className="filter-btn"
                onClick={() => {
                    console.log(listOfRestaurants)
                    const filteredList = listOfRestaurants.filter(
                        restaurant => restaurant.info.avgRating > 4
                    );
                    console.log(filteredList)
                    setlistOfRestaurants(filteredList);
                }}
            >Top Rated Restaurants</button>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurentCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
}

export default Body;