function PropertyList({ properties }) {
    return properties.map((property) => {
      const { id, name, rating, price } = property;
      return (
        <div key={id}>
          <h1>{name}</h1>
          <h2>{rating}</h2>
          <h3>{price}</h3>
        </div>
      );
    });
  }
  
  export default PropertyList;
  