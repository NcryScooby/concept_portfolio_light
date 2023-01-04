import MuiCard from "../MUI/Card/MuiCard";
import { Container } from "./style";
import ecoreweb from "../../assets/ecoreweb.png";
import rektr from "../../assets/rektr.png";
import eShop from "../../assets/eShop.png";
import portfolio from "../../assets/portfolio.png";
import { useLanguage } from "../../context/LanguageContext";

const Projects = () => {
  const language = useLanguage();
  return (
    <>
      <Container>
        <div className="infos">
          {language.language === "en-US" ? (
            <>
              <h2>
                <span>My</span> Projects
              </h2>
              <p>These are some of the jobs and projects I&apos;ve done</p>
            </>
          ) : (
            <>
              <h2>
                <span>Meus</span> Projetos
              </h2>
              <p>Estes são alguns dos trabalhos e projetos que realizei</p>
            </>
          )}
        </div>
        <div className="projects">
          <MuiCard
            image={ecoreweb}
            title={"Ecore Web"}
            description={
              language.language === "en-US"
                ? "Complete project made for the Ecore Group."
                : "Projeto completo feito para o Grupo Ecore."
            }
            url={"https://ecoreweb.com.br"}
          />
          <MuiCard
            image={rektr}
            title={"Rektr"}
            description={
              language.language === "en-US"
                ? "A football app made with React, node and MySQL."
                : "Um app de futebol feito com React, node e MySQL."
            }
            url={"https://github.com/NcryScooby/soccer_client"}
          />
          <MuiCard
            image={eShop}
            title={"eShop"}
            description={
              language.language === "en-US"
                ? "An e-commerce made with React, node and MongoDB."
                : "Um e-commerce feito com React, node e MongoDB."
            }
            url={"https://github.com/NcryScooby/eShopReact"}
          />
          <MuiCard
            image={portfolio}
            title={"Portfolio"}
            description={
              language.language === "en-US"
                ? "A personal portfolio"
                : "Um portfólio pessoal"
            }
            url={"https://fabricio-portfolio.netlify.app"}
          />
        </div>
      </Container>
    </>
  );
};

export default Projects;
