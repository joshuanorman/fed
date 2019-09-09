import React, { useState, createContext } from "react";
import { enLangData } from './dataConsts';


const LangContext = createContext([{}, () => {}]);

const LangProvider = (props) => {
  const [lang, setLang] = useState({
    'data': enLangData
  });

 return (
   <LangContext.Provider value={[lang, setLang]}>
     {props.children}
   </LangContext.Provider>
 );
};

export { LangContext, LangProvider };


