import "./CV.css";

function CV({ userInfo, educations, experience }) {
  return (
    <section className="cv">
      <section className="cv-main">
        <section className="education">
          <h2>Education</h2>
          <ul>
            {educations.map((ed) => (
              <li className="education">
                <div className="study bold">{ed.title}</div>
                <div className="school">{ed.school}</div>
                <div className="graduation_date">
                  <span className="bold">Graduation Date:</span>{" "}
                  {ed.graduation_date}
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <ul>
            {experience.map((position) => (
              <li className="position">
                <div className="job-title bold">{position.job_title}</div>
                <div className="period">
                  {position.start_date.split("-").join(".")} -{" "}
                  {position.end_date.split("-").join(".")}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="user-info">
        <div className="name">
          {userInfo.first_name + " " + userInfo.last_name}
        </div>
        <div className="email">{userInfo.email}</div>
        <div className="phone-number">{userInfo.phone_number}</div>
      </section>
    </section>
  );
}

export default CV;
