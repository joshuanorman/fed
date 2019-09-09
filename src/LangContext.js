import React, { useState, createContext } from "react";
import { enLangData } from './dataConsts';
// import createUseContext from "constate";


const LangContext = createContext([{}, () => {}]);

const LangProvider = (props) => {
  const [lang, setLang] = useState({
    "lang": "english", "url": enLangData
  });

 return (
   <LangContext.Provider value={[lang, setLang]}>
     {props.children}
   </LangContext.Provider>
 );
};

export { LangContext, LangProvider };


// // 1️⃣ Create a custom hook as usual
// export function useLang() {
//   const [lang, setLang] = useState({'current':['english','piglatin']});
//   const langChange = (e) => setLang(e.target.name);
//   return { lang, langChange };
// }

// // 2️⃣ Wrap your hook with the createUseContext factory
// const useLangContext = createUseContext(useLang);

// function Button() {
//   // 3️⃣ Use context instead of custom hook
//   const { increment } = useLangContext()
//   return <button onClick={increment}>+</button>;
// }

// // export function Lang() {
// //   // 4️⃣ Use context in other components
// //   const { lang } = useLangContext()
// //   return <span>{lang}</span>;
// }

// // function App() {
// //   // 5️⃣ Wrap your components with Provider
// //   return (
// //     <useLangContext.Provider>
// //       <Lang />
// //       <Button />
// //     </useLangContext.Provider>
// //   );
// // }

// export default useLangContext;