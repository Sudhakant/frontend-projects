import { useState } from "react";

export default function UserNameForm() {
  const [userName, setUserName] = useState("");
  const updateUserName = (evt) => {
    setUserName(evt.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="userName" value={userName} onChange={updateUserName} />
      <button></button>
    </div>
  );
}
