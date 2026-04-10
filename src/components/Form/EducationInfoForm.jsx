import { useMemo } from "react";
import FormSection from "./FormSection";

class Education {
  constructor() {
    this.id = crypto.randomUUID();
    this.title = "";
    this.school = "";
    this.graduation_date = "";
  }
}

function EducationInfoForm({ initialEducations, changeEducations, hide }) {
  const educationInputTypes = useMemo(() => ["text", "text", "date"], []);

  return (
    <FormSection
      initialState={initialEducations}
      changeState={changeEducations}
      inputTypes={educationInputTypes}
      hide={hide}
      subSectionClassName="education"
      objConstructor={Education}
    />
  );
}

export default EducationInfoForm;
