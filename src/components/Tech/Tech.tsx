import { Container } from "./style";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import react from "../../assets/react.svg";
import mysql from "../../assets/mysql.svg";
import node from "../../assets/node.svg";
import docker from "../../assets/docker.svg";
import reactnative from "../../assets/react-native.svg";
import { Tooltip } from "@mui/material";

const Tech = () => {
  return (
    <>
      <Container>
        <div className="title">
          <h2>
            My <span>Techs</span>
          </h2>
        </div>
        <div className="tecs">
          <div className="tecs-old">
            <p>Technologies</p>
            <h3>
              <span>Already</span> used
            </h3>
            <div>
              <Tooltip title="HTML" disableInteractive>
                <img src={html} alt="html" />
              </Tooltip>
              <Tooltip title="CSS" disableInteractive>
                <img src={css} alt="css" />
              </Tooltip>
              <Tooltip title="JavaScript" disableInteractive>
                <img src={javascript} alt="javascript" />
              </Tooltip>
              <Tooltip title="TypeScript" disableInteractive>
                <img src={typescript} alt="typescript" />
              </Tooltip>
              <Tooltip title="React" disableInteractive>
                <img src={react} alt="react" />
              </Tooltip>
              <Tooltip title="Node" disableInteractive>
                <img src={node} alt="node" />
              </Tooltip>
              <Tooltip title="MySQL" disableInteractive>
                <img src={mysql} alt="mysql" />
              </Tooltip>
            </div>
          </div>
          <div className="tecs-current">
            <p>Technologies</p>
            <h3>
              <span>Currently</span> developing
            </h3>
            <div>
              <Tooltip title="React-Native" disableInteractive>
                <img src={reactnative} alt="reactnative" />
              </Tooltip>
              <Tooltip title="Docker" disableInteractive>
                <img src={docker} alt="docker" />
              </Tooltip>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Tech;
