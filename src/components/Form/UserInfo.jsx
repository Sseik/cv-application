function UserInfo({ firstName, lastName, email, phoneNumber }) {
  return (
    <>
      <div>Name: {firstName + " " + lastName}</div>
      <div>Email: {email}</div>
      <div>Phone Number: {phoneNumber}</div>
    </>
  );
}

export default UserInfo;
