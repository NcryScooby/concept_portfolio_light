import { Container, Button } from "./style";
import illustration from "../../assets/illustration.svg";
import git from "../../assets/git.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import curriculum from "../../assets/curriculum.pdf";

const Introduction = () => {
  const downloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "fabricio_curriculum.pdf";
    link.click();
  };

  return (
    <>
      <Container>
        <div className="infos">
          <div>
            <p>Hi,</p>
            <h2>I&apos;M A SOFTWARE DEVELOPER</h2>
            <p>Welcome to my portfolio</p>
          </div>
          <div>
            <Button onClick={downloadCurriculum}>Download CV</Button>
          </div>
          <div className="networks">
            <a
              href="https://github.com/NcryScooby"
              target="_blank"
              rel="noreferrer"
            >
              <img src={git} alt="github" className="links" />
            </a>
            <a
              href="https://www.linkedin.com/in/fabr%C3%ADcio-caldana-anelli-593b091a3/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="links" />
            </a>
            <a
              href="https://www.instagram.com/notrealscooby"
              target="_blank"
              rel="noreferrer"
            >
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
