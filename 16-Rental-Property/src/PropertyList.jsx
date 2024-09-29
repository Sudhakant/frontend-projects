import Property from "./property";
import "./PropertyList.css"
function PropertyList({ properties }) {
  return properties.map((property) => {
    return (
      <div key={property.id} className="PropertyList">
        <Property {...property} />
      </div>
    );
  });
}

export default PropertyList;
