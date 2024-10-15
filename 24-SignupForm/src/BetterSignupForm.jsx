import { useState } from "react";

export default function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });

  const handleChange = (evt) => {
    const changedField = evt.target.name;
    const newValue = evt.target.value;

    setFormData(currData => {
        currData[changedField] = newValue;
        return { ...currData };
    });
  }

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="firstName"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="lastName"
        value={formData.lastName}
        onChange={handleChange}
        name="firstName"
        id="lastname"
      />
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  );
}
