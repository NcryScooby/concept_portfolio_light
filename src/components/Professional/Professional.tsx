import { Container } from "./style";
import quote from "../../assets/quote.svg";

const Professional = () => {
  return (
    <>
      <Container>
        <div className="title">
          <div>
            <p>Minha jornada esta apenas começando, sempre aprendendo</p>
          </div>
          <h2>
            Experiência <span>Profissional</span>
          </h2>
        </div>
        <div className="cards">
          <div>
            <strong>Freelancer em Manutenção/Montagem de Computadores</strong>
            <p>2018 a 2021.</p>
          </div>
          <div>
            <strong>Estágio de desenvolvedor Front-End</strong>
            <h6>Grupo Dimed/Panvel</h6>
            <p>08/21 até 02/22.</p>
            <p>
              Auxiliava na construção de Sites Web usando a tecnologia ReactJS.
            </p>
          </div>
          <div>
            <strong>
              Estágio de desenvolvedor Front-End/Mobile e TI specialist.
            </strong>
            <h6>Grupo Ecore</h6>
            <p>05/22 até 12/22.</p>
            <p>
              Construo Aplicações Web, usando ReactJS, NodeJS e mySQL.
              Aplicações mobile usando React-Native e suporte geral nos
              computadores e no sistema realizando consultas e alterações no
              Banco de Dados.
            </p>
          </div>
        </div>
        <div className="final-text">
          <img src={quote} alt="quote" id="quote" />
          <p>
            “<strong>Aprender</strong> é a unica coisa que
            <strong> a mente não se cansa</strong>, nunca tem medo e nunca se
            arrepende”
          </p>
          <p>~Leonardo da Vinci</p>
        </div>
      </Container>
    </>
  );
};

export default Professional;
