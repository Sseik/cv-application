import { useState } from "react";

function UserInfoForm({
  initialFirstName,
  initialLastName,
  initialEmail,
  initialPhoneNumber,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhoneNumber,
  hide,
}) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [email, setEmail] = useState(initialEmail);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeFirstName(firstName);
        changeLastName(lastName);
        changeEmail(email);
        changePhoneNumber(phoneNumber);
        hide();
      }}
    >
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="phone">Phone Number:</label>
      <input
        type="phone"
        id="phone"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={() => hide()}>Cancel</button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserInfoForm;
