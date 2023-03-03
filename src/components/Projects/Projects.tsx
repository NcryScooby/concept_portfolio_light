import MuiCard from "../MUI/Card/MuiCard";
import { Container } from "./style";
import ecoreweb from "../../assets/ecoreweb.png";
import foo from "../../assets/foo.png";
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
            image={foo}
            title={"Foo"}
            description={
              language.language === "en-US"
                ? "A store to buy food made with React, Node and Mongo."
                : "Um loja para comprar comida feito com React, Node e Mongo."
            }
            url={
              "https://www.linkedin.com/posts/fabr%C3%ADcio-caldana-anelli-593b091a3_fullstack-react-node-activity-7026244407766986752-PSkg?utm_source=share&utm_medium=member_desktop"
            }
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
