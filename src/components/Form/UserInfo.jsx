function UserInfo({ first_name, last_name, email, phone_number }) {
  return (
    <>
      <div>Name: {first_name + " " + last_name}</div>
      <div>Email: {email}</div>
      <div>Phone Number: {phone_number}</div>
    </>
  );
}

export default UserInfo;
