import Router from "./Router";
import GlobalStyles from "./styles/GlobalStyles";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <>
      <LanguageProvider>
        <Router />
        <GlobalStyles />
      </LanguageProvider>
    </>
  );
};

export default App;
