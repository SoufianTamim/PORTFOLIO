import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Full-Stack Web Developement",
    academy: "Solicode | Simplonline",
    dec: "I embarked on an exciting journey into the world of web development by enrolling in a comprehensive Full Stack Web Development bootcamp offered by Solicode in collaboration with the Simplonline program. This intensive learning experience was a pivotal step in my pursuit of expertise in web development.",
    startYear: "2022",
    endYear: "2023",
  },
  {
    id: 2,
    title: "Faculty of Tetouan",
    academy: "Abd El Malek Saadi",
    dec: "I dedicated two years of my academic journey to the field of physics science. During this period, my focus was on immersing myself in the fascinating world of physical phenomena, mathematical principles, and scientific exploration.",
    startYear: "2021",
    endYear: "2023",
  },
  {
    id: 3,
    title: "High School",
    academy: "Abdelkrim El Khatabi",
    dec: "I pursued a rigorous academic curriculum with a strong emphasis on physics and science. This educational journey provided me with a solid foundation in the fundamental principles of the physical sciences, nurturing my curiosity about the world around us.",
    startYear: "2020",
    endYear: "2021",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Web Developer",
    company: "ALEO AGENCY",
    dec: "As a Web Developer at Aleo Agency, I had the privilege of being part of a dynamic team that specializes in creating exceptional digital experiences. My role encompassed a wide range of responsibilities, allowing me to contribute to various aspects of web development and deliver innovative solutions for our clients.",
    startYear: "08/2023",
    endYear: false,
  },
  {
    id: 2,
    title: "Web Developer",
    company: "SEBN.MA",
    dec: " I had the valuable opportunity to work as a trainee web developer in Sebn.ma, where I honed my skills and gained hands-on experience in web development using ASP.NET, C#, and the MVC framework. During my two-month tenure, I collaborated with a talented team to create dynamic and responsive web applications. This experience not only enriched my technical abilities but also provided me with real-world insights into the fast-paced world of web development.",
    startYear: "05/2023",
    endYear: "07/2023",
  },
  {
    id: 3,
    title: "Graphic Designer",
    company: "DISTRIMED S.A.R.L",
    dec: "During my summer breaks while pursuing my studies, I had the valuable opportunity to intern as a Graphic Designer at DISTRIMED S.A.R.L. This experience enabled me to put my creative abilities to practical use and gain hands-on experience with industry-standard design software, including Adobe Photoshop, Illustrator, and various other Adobe applications.",
    startYear: "2020",
    endYear: "2022",
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
