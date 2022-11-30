import MuiCard from "../MUI/Card/MuiCard";
import { Container } from "./style";
import ecoreweb from "../../assets/ecoreweb.png";
import rektr from "../../assets/rektr.png";
import eShop from "../../assets/eShop.png";
import portfolio from "../../assets/portfolio.png";

const Projects = () => {
  return (
    <>
      <Container>
        <div className="infos">
          <h2>
            <span>Meu</span> Projetos
          </h2>
          <p>Estes são alguns dos trabalhos e projetos que já realizei</p>
        </div>
        <div className="projects">
          <MuiCard
            image={ecoreweb}
            title={"Ecore Web"}
            description={"Complete project made for the Ecore Group."}
            url={"https://ecoreweb.com.br"}
          />
          <MuiCard
            image={rektr}
            title={"Rektr"}
            description={"A football app made with React, node and MySQL."}
            url={"https://github.com/NcryScooby/soccer_client"}
          />
          <MuiCard
            image={eShop}
            title={"eShop"}
            description={"An e-commerce made with React, node and MongoDB."}
            url={"https://github.com/NcryScooby/eShopReact"}
          />
          <MuiCard
            image={portfolio}
            title={"Portfólio"}
            description={"A personal portfolio"}
            url={"https://fabricio-portfolio.netlify.app"}
          />
        </div>
      </Container>
    </>
  );
};

export default Projects;
