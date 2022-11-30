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
            <p>Olá pessoas,</p>
            <h2>Eu sou um Programador</h2>
            <p>Seja bem-vindo ao meu portfólio website</p>
          </div>
          <div>
            <Button>Saiba mais sobre mim</Button>
          </div>
          <div className="networks">
            <img src={git} alt="github" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
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
