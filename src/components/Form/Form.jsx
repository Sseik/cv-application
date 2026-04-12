import { useState } from "react";
import UserInfo from "./UserInfo";
import UserInfoForm from "./UserInfoForm";
import "./Form.css";
import EducationInfoForm from "./EducationInfoForm";
import EducationInfo from "./EducationInfo";
import ExperienceInfoForm from "./ExperienceInfoForm";
import ExperienceInfo from "./ExperienceInfo";

function Form({
  userInfo,
  changeUserInfo,
  educations,
  changeEducations,
  experience,
  changeExperience,
}) {
  const [userFormVisible, setUserFormVisible] = useState(true);
  const [educationFormVisible, setEducationFormVisible] = useState(true);
  const [experienceFormVisible, setExperienceFormVisible] = useState(true);

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
              first_name={userInfo.first_name}
              last_name={userInfo.last_name}
              email={userInfo.email}
              phone_number={userInfo.phone_number}
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
      <section className="experience">
        <h3>Experience</h3>
        {experienceFormVisible ? (
          <ExperienceInfoForm
            initialExperience={experience}
            changeExperience={changeExperience}
            hide={() => setExperienceFormVisible(false)}
          />
        ) : (
          <>
            <ExperienceInfo experience={experience} />
            <button onClick={() => setExperienceFormVisible(true)}>Edit</button>
          </>
        )}
      </section>
    </section>
  );
}

export default Form;
