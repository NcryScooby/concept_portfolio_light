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
            <p>Assistance in building websites using ReactJS technology.</p>
          </div>
          <div>
            <strong>
              Front-End/Mobile developer internship and IT specialist.
            </strong>
            <h6>Grupo Ecore</h6>
            <p>05/22 to 12/22.</p>
            <p>
              I build Web Applications, using ReactJS, NodeJS and mySQL. Mobile
              applications using React-Native and general support in computers
              and the system performing consultations and changes in the
              Database.
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
