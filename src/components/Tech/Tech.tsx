import { Container } from "./style";
import angular from "../../assets/angular.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import react from "../../assets/react.svg";
import mysql from "../../assets/mysql.svg";
import node from "../../assets/node.svg";
import docker from "../../assets/docker.svg";
import reactnative from "../../assets/react-native.svg";
import java from "../../assets/java.svg";

const Tech = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h2>
            Minhas <span>Techs</span>
          </h2>
        </div>
        <div className="tecs">
          <div className="tecs-old">
            <p>Tecnologias</p>
            <h3>
              <span>Já</span> utilizadas
            </h3>
            <div>
              <img src={angular} alt="angular" />
              <img src={reactnative} alt="reactnative" />
              <img src={java} alt="java" />
            </div>
          </div>
          <div className="tecs-current">
            <p>Tecnologias</p>
            <h3>
              <span>Atualmente</span> desenvolvendo
            </h3>
            <div>
              <img src={html} alt="html" />
              <img src={css} alt="css" />
              <img src={javascript} alt="javascript" />
              <img src={typescript} alt="typescript" />
              <img src={react} alt="react" />
              <img src={node} alt="node" />
              <img src={mysql} alt="mysql" />
              <img src={docker} alt="docker" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Tech;
