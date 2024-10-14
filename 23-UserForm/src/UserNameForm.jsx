import { useState } from "react";

export default function UserNameForm() {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <input type="text" placeholder="userName" value={userName} />
      <button></button>
    </div>
  );
}
