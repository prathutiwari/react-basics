import { RESTAURANT_IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = (resData) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData?.resData?.info;
  return (
    <div className="res-card">
      <img src={RESTAURANT_IMG_CDN_URL + cloudinaryImageId} alt="Res Img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
