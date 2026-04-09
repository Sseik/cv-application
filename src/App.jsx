import { useState } from "react";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Form
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        changeFirstName={setFirstName}
        changeLastName={setLastName}
        changeEmail={setEmail}
        changePhoneNumber={setPhoneNumber}
      ></Form>
    </>
  );
}

export default App;
