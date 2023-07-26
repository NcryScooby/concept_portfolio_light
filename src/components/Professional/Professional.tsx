import { Container } from "./style";
import quote from "../../assets/quote.svg";
import { useLanguage } from "../../context/LanguageContext";

const Professional = () => {
  const language = useLanguage();

  return (
    <>
      <Container>
        <div className="title">
          <div>
            <p>
              {language.language === "en-US"
                ? "My journey is just beginning, always learning"
                : "Minha jornada está apenas começando, sempre aprendendo"}
            </p>
          </div>
          {language.language === "en-US" ? (
            <h2>
              Professional <span>Experience</span>
            </h2>
          ) : (
            <h2>
              Experiência <span>Profissional</span>
            </h2>
          )}
        </div>
        <div className="cards">
          <div>
            <strong>
              {language.language === "en-US"
                ? "Front-End developer internship"
                : "Estágio de desenvolvedor front-end"}
            </strong>
            <h6>Grupo Ecore</h6>
            <p className="time">
              {language.language === "en-US"
                ? "May/22 to December/22"
                : "Maio/22 a Dezembro/22"}
            </p>
            <p>
              {language.language === "en-US"
                ? "I led and developed improvement projects in the company's systems using React, Node, Mysql, Mongodb technologies. One of them was EcoreWeb, where an internal system was built that generated automation, improved inventory and purchase management, generating cost reduction. In addition to reducing the time to perform tasks, and improving various internal processes. In addition, I implemented a system that improved internal communication between employees, which resulted in greater productivity and organization."
                : "Liderei e desenvolvi projetos de melhoria nos sistemas da empresa utilizando as tecnologias React, Node, Mysql, Mongodb. Um deles foi o EcoreWeb, onde foi construído um sistema interno que gerou automatismo, aprimorou a gestão de estoque e compras, gerando redução de custos. Além da redução no tempo de realização das tarefas, e melhoria de diversos processos internos. Além disso, implementei um sistema que melhorou a comunicação interna entre os colaboradores, o que ocasionou em maior produtividade e organização."}
            </p>
          </div>
          <div>
            <strong>
              {language.language === "en-US"
                ? "Front End Developer Internship"
                : "Estágio de Desenvolvedor Front End"}
            </strong>
            <h6>Grupo Dimed/Panvel</h6>
            <p className="time">
              {language.language === "en-US"
                ? "August/21 to February/22"
                : "Agosto/21 a Fevereiro/22"}
            </p>
            {language.language === "en-US" ? (
              <p>
                Promoted the correction of bugs in systems and added new
                features. In addition, I performed test coverage tasks, mapping
                functions where tests were not being performed. It was possible
                to develop knowledge of agile methodologies, SCRUM and modern
                technologies such as React, Spring Boot and Angular.
              </p>
            ) : (
              <p>
                Promovia a correção de bugs em sistemas e realizava adição de
                novas features. Além disso, realizava tarefas de cobertura de
                testes, mapeando funções onde não estavam sendo realizados
                testes. Foi possível desenvolver conhecimentos de metodologias
                ágeis, SCRUM e tecnologias modernas, como React, Spring Boot e
                Angular.
              </p>
            )}
          </div>
          <div>
            <strong>
              {language.language === "en-US"
                ? "Junior Front End Developer"
                : "Desenvolvedor Júnior Front End"}
            </strong>
            <h6>Bagy</h6>
            <p className="time">
              {language.language === "en-US"
                ? "April/23 to Present"
                : "Abril/23 até o Presente Momento"}
            </p>
            <p>
              {language.language === "en-US"
                ? "Currently, I am part of the support team for the Bagy platform, where I work as part of the squad dedicated to bug resolution. Our team performs fixes on several platforms, including projects in Vue.js, Angular, PHP and Twig. In the squad, my role is to identify and solve emerging problems, ensuring the stability of the platforms and the satisfaction of the users. In addition, I am a prevention enthusiast, seeking to improve development processes to avoid the recurrence of errors."
                : "Atualmente, integro a equipe de sustentação da plataforma Bagy, onde atuo como parte da squad dedicada à resolução de bugs. Nossa equipe realiza correções em diversas plataformas, incluindo projetos em Vue.js, Angular, PHP e Twig. Na squad, meu papel é identificar e solucionar problemas emergentes, garantindo a estabilidade das plataformas e a satisfação dos usuários. Além disso, sou um entusiasta da prevenção, buscando aprimorar processos de desenvolvimento para evitar a recorrência de erros."}
            </p>
          </div>
        </div>
        <div className="final-text">
          <img src={quote} alt="quote" id="quote" />
          {language.language === "en-US" ? (
            <>
              <p>
                “<strong>Learning</strong> is the only thing{" "}
                <strong>the mind never exhausts</strong>, never fears, and never
                regrets”
              </p>
              <p>~Leonardo da Vinci</p>
            </>
          ) : (
            <>
              <p>
                “<strong>Aprender</strong> é a única coisa{" "}
                <strong>que a mente nunca se cansa</strong>, nunca tem medo e
                nunca se arrepende”
              </p>
              <p>~Leonardo da Vinci</p>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default Professional;
