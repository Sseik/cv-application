import { useState } from "react";
import Form from "./components/Form/Form";
import CV from "./components/CV/CV";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
  });
  const [educations, setEducations] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <>
      <Form
        userInfo={userInfo}
        changeUserInfo={setUserInfo}
        educations={educations}
        changeEducations={setEducations}
        experience={experience}
        changeExperience={setExperience}
      ></Form>
      <CV userInfo={userInfo} educations={educations} experience={experience} />
    </>
  );
}

export default App;
