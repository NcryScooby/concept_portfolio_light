import { Container } from "./style";
import fabricio from "../../assets/fabricio.svg";
import four from "../../assets/four.svg";
import three from "../../assets/three.svg";
import two from "../../assets/two.svg";
import one from "../../assets/one.svg";

const About = () => {
  return (
    <>
      <Container>
        <img src={fabricio} alt="fabricio" id="fabricio" />
        <h2>
          <span>Fabrício</span> Caldana Anelli
        </h2>
        <p>
          Full Stack Developer with passion for programming, focused on solving
          problems and improving processes, aiming to achieve the best results
          for the organization. In my previous experience it was possible to
          reduce costs by developing an internal system using innovative
          technologies.
        </p>
        <h2 className="hard-skills">
          Hard <span>Skills</span>
        </h2>
        <div className="skills">
          <div>
            <p>HTML</p>
            <img src={four} alt="four" />
          </div>

          <div>
            <p>CSS</p>
            <img src={four} alt="four" />
          </div>

          <div>
            <p>JavaScript</p>
            <img src={three} alt="three" />
          </div>

          <div>
            <p>ReactJS</p>
            <img src={three} alt="three" />
          </div>

          <div>
            <p>NodeJS</p>
            <img src={three} alt="three" />
          </div>

          <div>
            <p>MySQL</p>
            <img src={three} alt="three" />
          </div>

          <div>
            <p>MongoDB</p>
            <img src={two} alt="two" />
          </div>

          <div>
            <p>Docker</p>
            <img src={one} alt="one" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
