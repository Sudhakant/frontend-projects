import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
  });

  function handleChange(evt){
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
        currData[fieldName] = value;
        return { ...currData };
    });
  }

  const handleSubmit = () => {
    console.log(firstName, lastName);
  };

  return (
    <div>
      <label htmlFor="firstname">First Name: </label>
      <input
        type="text"
        placeholder="firstName"
        value={formData.firstName}
        onChange={handleChange}
        id="firstname"
      />
      <label htmlFor="lastname">Last Name: </label>
      <input
        type="text"
        placeholder="lastName"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
      />
      <button onSubmit={handleSubmit}>Submit</button>
    </div>
  );
}
