import { useMemo } from "react";
import FormSection from "./FormSection";

function UserInfoForm({ userInfo, changeUserInfo, hide }) {
  const userInfoInputTypes = useMemo(() => ["text", "text", "email", "phone"], []);

  return (
    <FormSection
      inputTypes={userInfoInputTypes}
      initialState={userInfo}
      changeState={changeUserInfo}
      hide={hide}
    />
  );
}

export default UserInfoForm;
