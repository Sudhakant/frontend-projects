import Property from "./property";
function PropertyList({ properties }) {
  return properties.map((property) => {
    return (
      <div key={property.id}>
        <Property {...property} />
      </div>
    );
  });
}

export default PropertyList;
