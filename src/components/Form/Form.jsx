import { useState } from "react";
import UserInfo from "./UserInfo";
import UserInfoForm from "./UserInfoForm";
import "./Form.css";

function Form({
  firstName,
  lastName,
  email,
  phoneNumber,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhoneNumber,
}) {
  const [userFormVisible, setUserFormVisible] = useState(true);

  return (
    <section className="form">
      <h2>Form</h2>
      <section className="user-info">
        {userFormVisible ? (
          <UserInfoForm
            initialFirstName={firstName}
            initialLastName={lastName}
            initialEmail={email}
            initialPhoneNumber={phoneNumber}
            changeFirstName={changeFirstName}
            changeLastName={changeLastName}
            changeEmail={changeEmail}
            changePhoneNumber={changePhoneNumber}
            hide={() => setUserFormVisible(false)}
          />
        ) : (
          <>
            <UserInfo
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
            />
            <button onClick={() => setUserFormVisible(true)}>Edit</button>
          </>
        )}
      </section>
    </section>
  );
}

export default Form;
