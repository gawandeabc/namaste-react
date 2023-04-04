const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  
const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costFoTwo, deliveryTime, imageId } =
      resData?.data;
    return (
      <div className="res-card" style={styleCard}>
        <img className="res-logo" src={resData.data.imageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>Rs.{costFoTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} Mins</h4>
      </div>
    );
  };

  export default RestaurantCard;