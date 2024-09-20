import "./pokemon.css";

export default function Pokemon() {
  const randomNumber = Math.ceil(Math.random() * 151);
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`;
  return (
    <div className="pokemon">
      <h1>Pokemon #{randomNumber}</h1>
      <img src={url} alt="Pokemon" srcset="" />
    </div>
  );
}
