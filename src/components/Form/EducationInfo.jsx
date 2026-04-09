function EducationInfo({ educations }) {
  return (
    <ul>
      {educations && educations.map((education) => (
        <li key={education.id} className="education">
          <h3>{education.title}</h3>
          <div>School: {education.school}</div>
          <div>Graduation Date: {education.graduationDate}</div>
        </li>
      ))}
    </ul>
  );
}

export default EducationInfo;
