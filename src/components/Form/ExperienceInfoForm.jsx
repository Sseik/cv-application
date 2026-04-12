import { useMemo } from "react";
import FormSection from "./FormSection";

class Position {
  constructor() {
    this.id = crypto.randomUUID();
    this.job_title = "";
    this.start_date = "";
    this.end_date = "";
  }
}

function ExperienceInfoForm({ initialExperience, changeExperience, hide }) {
  const experienceInputTypes = useMemo(() => ["text", "date", "date"], []);
  return (
    <>
      <FormSection
        initialState={initialExperience}
        changeState={changeExperience}
        inputTypes={experienceInputTypes}
        hide={hide}
        subSectionClassName="position"
        objConstructor={Position}
      />
    </>
  );
}

export default ExperienceInfoForm;
