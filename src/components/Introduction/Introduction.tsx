import { Container, Button } from "./style";
import illustration from "../../assets/illustration.svg";
import git from "../../assets/git.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";

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
            <img src={git} alt="github" className="links" />
            <img src={linkedin} alt="linkedin" className="links" />
            <img src={instagram} alt="instagram" className="links" />
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
