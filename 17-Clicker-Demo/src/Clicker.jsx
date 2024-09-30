function handleClick(message) {
    return (evt) => {
      evt.preventDefault();
      alert(message);
    };
  }
  
  export default function Clicker({ message, buttonText }) {
    return <button onClick={handleClick(message)}>{buttonText}</button>;
  }
  