import React, { createContext, useContext, useState, ReactNode } from 'react';
import text from "@/utils/text.json";
import content from "@/utils/content.json";

interface LangContextType {
    lang: string;
    updateLanguage: (code: string) => void;
    text?: any;
    content?: any;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState('es'); // El idioma predeterminado

    const updateLanguage = (code: string) => {
        setLang(code);
    };

    return (
        <LangContext.Provider value={{ lang, updateLanguage, text, content }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    const context = useContext(LangContext);
    if (context === undefined) {
        throw new Error('useLang must be used within a LangProvider');
    }
    return context;
};
