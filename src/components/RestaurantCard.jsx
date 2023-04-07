import { Chip } from "primereact/chip";
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
      <h4>{cuisines.join(", ")}</h4>
      <h4>Rs.{costFoTwo / 100} For Two</h4>
      <div className="chip">
        <Chip
          label={avgRating}
          icon="pi pi-star-fill"
        />
        <Chip label={deliveryTime} icon="pi pi-clock" />
      </div>
      <div></div>
    </div>
  );
};

export default RestaurantCard;
