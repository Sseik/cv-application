import { useState } from "react";
import UserInfo from "./UserInfo";
import UserInfoForm from "./UserInfoForm";
import "./Form.css";
import EducationInfoForm from "./EducationInfoForm";
import EducationInfo from "./EducationInfo";

function Form({
  userInfo,
  changeUserInfo,
  educations,
  changeEducations,
}) {
  const [userFormVisible, setUserFormVisible] = useState(true);
  const [educationFormVisible, setEducationFormVisible] = useState(true);

  return (
    <section className="form">
      <h2>Form</h2>
      <section className="user-info">
        <h3>User Info</h3>
        {userFormVisible ? (
          <UserInfoForm
            userInfo={userInfo}
            changeUserInfo={changeUserInfo}
            hide={() => setUserFormVisible(false)}
          />
        ) : (
          <>
            <UserInfo
              firstName={userInfo.firstName}
              lastName={userInfo.lastName}
              email={userInfo.email}
              phoneNumber={userInfo.phoneNumber}
            />
            <button onClick={() => setUserFormVisible(true)}>Edit</button>
          </>
        )}
      </section>
      <section className="educations">
        <h3>Education</h3>
        {educationFormVisible ? (
          <EducationInfoForm
            initialEducations={educations}
            changeEducations={changeEducations}
            hide={() => setEducationFormVisible(false)}
          />
        ) : (
          <>
            <EducationInfo educations={educations} />
            <button onClick={() => setEducationFormVisible(true)}>Edit</button>
          </>
        )}
      </section>
    </section>
  );
}

export default Form;
