import logo from "../../assets/header_logo.svg";
import { Container } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Container>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>Fabrício</h1>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="#about">Home</Link>
            </li>
            <li>
              <Link to="#about">Introduction</Link>
            </li>
            <li>
              <Link to="#about">Skills</Link>
            </li>
            <li>
              <Link to="#about">Projects</Link>
            </li>
            <li>
              <Link to="#about">Technologies</Link>
            </li>
            <li>
              <Link to="#about">Experience</Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
