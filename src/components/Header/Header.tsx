import { useState } from "react";
import logo from "../../assets/header_logo.svg";
import { Container } from "./style";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLanguage } from "../../context/LanguageContext";

const Header = () => {
  const language = useLanguage();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const setOptionLanguage = (option: string) => {
    language.setLanguage(option);
    handleClose();
  };

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
              <Link to="#about">
                {language.language === "en-US" ? "Home" : "Início"}
              </Link>
            </li>
            <li>
              <Link to="#about">
                {language.language === "en-US" ? "Introduction" : "Introdução"}
              </Link>
            </li>
            <li>
              <Link to="#about">
                {language.language === "en-US" ? "Skills" : "Habilidades"}
              </Link>
            </li>
            <li>
              <Link to="#about">
                {language.language === "en-US" ? "Projects" : "Projetos"}
              </Link>
            </li>
            <li>
              <Link to="#about">
                {language.language === "en-US" ? "Technologies" : "Tecnologias"}
              </Link>
            </li>
            <li>
              <Link to="#about">Experience</Link>
            </li>
            <li>
              <button onClick={handleClick}>
                {language.language === "en-US" ? "Language" : "Idioma"}
              </button>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={() => setOptionLanguage("en-US")}>
                  {language.language === "en-US" ? "English" : "Inglês"}
                </MenuItem>
                <MenuItem onClick={() => setOptionLanguage("pt-BR")}>
                  {language.language === "en-US"
                    ? "Portuguese (Brazil)"
                    : "Português (Brasil)"}
                </MenuItem>
              </Menu>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Header;
