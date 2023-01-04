import { createContext, useContext, useEffect, useState } from "react";

interface LanguageContextData {
  language: string;
  setLanguage: (language: string) => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextData);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en-US" || "pt-BR"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  return context;
}
