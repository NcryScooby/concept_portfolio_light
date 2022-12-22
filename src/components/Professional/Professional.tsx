import { Container } from "./style";
import quote from "../../assets/quote.svg";

const Professional = () => {
  return (
    <>
      <Container>
        <div className="title">
          <div>
            <p>My journey is just beginning, always learning</p>
          </div>
          <h2>
            Professional <span>Experience</span>
          </h2>
        </div>
        <div className="cards">
          <div>
            <strong>Freelancer in Computer Maintenance/Assembly</strong>
            <p>2018 to 2021.</p>
          </div>
          <div>
            <strong>Front End Developer Internship</strong>
            <h6>Grupo Dimed/Panvel</h6>
            <p>08/21 to 02/22.</p>
            <p>
              Promoted the correction of bugs in systems and added new features.
              In addition, I performed test coverage tasks, mapping functions
              where tests were not being performed. It was possible to develop
              knowledge of agile methodologies, SCRUM and modern technologies
              such as React, Spring Boot and Angular.
            </p>
          </div>
          <div>
            <strong>Front-End developer internship</strong>
            <h6>Grupo Ecore</h6>
            <p>05/22 to 12/22.</p>
            <p>
              I led and developed improvement projects in the company&rsquo;s
              systems using React, Node, Mysql, Mongodb technologies. One of
              them was EcoreWeb, where an internal system was built that
              generated automation, improved inventory and purchase management,
              generating cost reduction. In addition to reducing the time to
              perform tasks, and improving various internal processes. In
              addition, I implemented a system that improved internal
              communication between employees, which resulted in greater
              productivity and organization.
            </p>
          </div>
        </div>
        <div className="final-text">
          <img src={quote} alt="quote" id="quote" />
          <p>
            “<strong>Learning</strong> is the only thing{" "}
            <strong>the mind never exhausts</strong>, never fears, and never
            regrets”
          </p>
          <p>~Leonardo da Vinci</p>
        </div>
      </Container>
    </>
  );
};

export default Professional;
