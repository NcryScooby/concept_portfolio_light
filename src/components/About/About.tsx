import { Container } from "./style";
import fabricio from "../../assets/fabricio.png";
import four from "../../assets/four.svg";
import three from "../../assets/three.svg";
import two from "../../assets/two.svg";
import one from "../../assets/one.svg";
import { useLanguage } from "../../context/LanguageContext";

const About = () => {
  const language = useLanguage();
  return (
    <>
      <Container>
        <img src={fabricio} alt="fabricio" id="fabricio" />
        <h2>
          <span>Fabrício</span> Caldana Anelli
        </h2>
        <p>
          {language.language === "en-US"
            ? "Full Stack Developer with passion for programming, focused on solving problems and improving processes, aiming to achieve the best results for the organization. In my previous experience it was possible to reduce costs by developing an internal system using innovative technologies."
            : "Desenvolvedor Full Stack com paixão por programação, focado em solucionar problemas e melhorar processos, visando alcançar os melhores resultados para a organização. Em minha experiência anterior foi possível reduzir custos através do desenvolvimento de um sistema interno utilizando tecnologias inovadoras."}
        </p>
        {language.language === "en-US" ? (
          <>
            <h2 className="hard-skills">
              Hard <span>Skills</span>
            </h2>
          </>
        ) : (
          <>
            <h2 className="hard-skills">
              Minhas <span>Habilidades</span>
            </h2>
          </>
        )}
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
