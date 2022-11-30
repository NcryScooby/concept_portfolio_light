import About from "../../components/About/About";
import Header from "../../components/Header/Header";
import Introduction from "../../components/Introduction/Introduction";
import Projects from "../../components/Projects/Projects";
import Tech from "../../components/Tech/Tech";
import { Container } from "./style";

const Home = () => {
  return (
    <>
      <Container>
        <span>
          <Header />
          <Introduction />
        </span>
        <About />
        <Projects />
        <Tech />
      </Container>
    </>
  );
};

export default Home;
