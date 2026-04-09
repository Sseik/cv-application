import { useState } from "react";

function UserInfoForm({ userInfo, changeUserInfo, hide }) {
  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [email, setEmail] = useState(userInfo.email);
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phoneNumber);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeUserInfo({ firstName, lastName, email, phoneNumber });
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
      <button type="button" onClick={hide}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserInfoForm;
