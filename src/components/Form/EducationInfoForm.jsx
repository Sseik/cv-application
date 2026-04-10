import { useState } from "react";

function EducationInfoForm({ initialEducations, changeEducations, hide }) {
  const [educations, setEducations] = useState(
    initialEducations.map((ed) => ({ ...ed })),
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        changeEducations(educations);
        hide();
      }}
    >
      {educations.map((education, index) => (
        <div key={education.id} className="education">
          <label htmlFor={`study${index}`}>Study:</label>
          <input
            id={`study${index}`}
            type="text"
            value={education.title}
            onChange={(e) => {
              const educationsCopy = educations.map((ed) => ({ ...ed }));
              educationsCopy[index].title = e.target.value;
              setEducations(educationsCopy);
            }}
          />
          <label htmlFor={`school${index}`}>School:</label>
          <input
            id={`school${index}`}
            type="text"
            value={education.school}
            onChange={(e) => {
              const educationsCopy = educations.map((ed) => ({ ...ed }));
              educationsCopy[index].school = e.target.value;
              setEducations(educationsCopy);
            }}
          />
          <label htmlFor={`graduation-date${index}`}>Graduation Date:</label>
          <input
            id={`graduation-date${index}`}
            type="date"
            value={education.graduationDate}
            onChange={(e) => {
              const educationsCopy = educations.map((ed) => ({ ...ed }));
              educationsCopy[index].graduationDate = e.target.value;
              setEducations(educationsCopy);
            }}
          />
          <button
            type="button"
            onClick={() => {
              setEducations(educations.filter((ed) => ed.id !== education.id));
            }}
          >
            🗑︎
          </button>
          <button
            type="button"
            onClick={() => {
              if (index > 0) {
                const educationsCopy = educations.map((ed) => ({ ...ed }));
                educationsCopy[index] = educationsCopy[index - 1];
                educationsCopy[index - 1] = { ...educations[index] };
                setEducations(educationsCopy);
              }
            }}
          >
            ↑
          </button>
          <button
            type="button"
            onClick={() => {
              if (index < educations.length) {
                const educationsCopy = educations.map((ed) => ({ ...ed }));
                educationsCopy[index] = educationsCopy[index + 1];
                educationsCopy[index + 1] = { ...educations[index] };
                setEducations(educationsCopy);
              }
            }}
          >
            ↓
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          setEducations(
            educations
              .map((ed) => ({ ...ed }))
              .concat({
                id: crypto.randomUUID(),
                title: "",
                school: "",
                graduationDate: "",
              }),
          );
        }}
      >
        +
      </button>
      <button type="button" onClick={hide}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EducationInfoForm;
