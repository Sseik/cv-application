import { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [educations, setEducations] = useState([]);

  return (
    <>
      <Form
        userInfo={userInfo}
        changeUserInfo={setUserInfo}
        educations={educations}
        changeEducations={setEducations}
      ></Form>
    </>
  );
}

export default App;
