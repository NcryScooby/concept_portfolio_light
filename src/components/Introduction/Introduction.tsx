import { Container, Button } from "./style";
import illustration from "../../assets/illustration.svg";
import git from "../../assets/git.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <>
      <Container>
        <div className="infos">
          <div>
            <p>Hi,</p>
            <h2>I'M A SOFTWARE DEVELOPER</h2>
            <p>Welcome to my portfolio</p>
          </div>
          <div>
            <Button>Learn more about me</Button>
          </div>
          <div className="networks">
            <a href="https://github.com/NcryScooby" target="_blank">
              <img src={git} alt="github" className="links" />
            </a>
            <a
              href="https://www.linkedin.com/in/fabr%C3%ADcio-caldana-anelli-593b091a3/"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="links" />
            </a>
            <a href="https://www.instagram.com/notrealscooby" target="_blank">
              <img src={instagram} alt="instagram" className="links" />
            </a>
          </div>
        </div>
        <div className="illustration">
          <img src={illustration} alt="illustration" id="img" />
        </div>
      </Container>
    </>
  );
};

export default Introduction;
