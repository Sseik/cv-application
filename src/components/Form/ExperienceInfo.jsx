function ExperienceInfo({ experience }) {
  return (
    <ol>
      {experience.map((position) => (
        <li className="position">
          <div>Job Title: {position.job_title}</div>
          <div>Start Date: {position.start_date}</div>
          <div>End Date: {position.end_date}</div>
        </li>
      ))}
    </ol>
  );
}

export default ExperienceInfo;
