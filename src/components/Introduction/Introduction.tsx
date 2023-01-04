import { Container, Button } from "./style";
import illustration from "../../assets/illustration.svg";
import git from "../../assets/git.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import curriculum from "../../assets/curriculum.pdf";
import { useLanguage } from "../../context/LanguageContext";

const Introduction = () => {
  const downloadCurriculum = () => {
    const link = document.createElement("a");
    link.href = curriculum;
    link.download = "fabricio_curriculum.pdf";
    link.click();
  };

  const language = useLanguage();

  return (
    <>
      <Container>
        <div className="infos">
          <div>
            <p>{language.language === "en-US" ? "Hi," : "Oi,"}</p>
            <h2>
              {language.language === "en-US"
                ? "I'M A SOFTWARE DEVELOPER"
                : "EU SOU UM PROGRAMADOR"}
            </h2>
            <p>
              {language.language === "en-US"
                ? "Welcome to my portfolio"
                : "Bem vindo ao meu portfólio"}
            </p>
          </div>
          <div>
            <Button onClick={downloadCurriculum}>
              {language.language === "en-US"
                ? "Download Curriculum"
                : "Baixar Currículo"}
            </Button>
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
