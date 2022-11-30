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
              <Link to="#about">Sobre</Link>
            </li>
            <li>
              <Link to="#about">Portfólio</Link>
            </li>
            <li>
              <Link to="#about">Serviços</Link>
            </li>
            <li>
              <Link to="#about">Resumo</Link>
            </li>
            <li>
              <Link to="#about">Contato</Link>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
