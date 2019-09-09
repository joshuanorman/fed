import React, { useState, useContext } from 'react';
import Langs from '../AppContext';
import EnLang from '../data/en_US.json';
import PlLang from '../data/la_PG.json';
import Dropdown from 'react-bootstrap/Dropdown';
import { LangContext }  from '../LangContext';
import useGlobalHook  from 'use-global-hook';
import Test from './Test';
import AppContext from '../AppContext';
// function useLang() {
//   const [lang, setLang] = useState({'current':['english','piglatin']});
//   // const langChange = (e) => setLang(e.target.name);
//   return { lang, setLang };
// }
function Translate() {
  // function useLang() {
  //   const [lang, setLang] = useState({'current':['english','piglatin']});
  //   const langChange = (e) => setLang(e.target.name);
  //   return { lang, setLang };
  // }
  // const value = useLangContext;
  // function Lang() {
  //     const { lang } = useLangContext();
  //     return <h2>{ lang.current[1] }</h2>;
  //   }
    const [lang, setLang] = useContext(LangContext);
    // const langRef = React.useRef(lang);
    // const TestRef = React.forwardRef(langRef)
    return (<>
    {/* <Test /> */}
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Language
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item name="english" onClick={(e) => {setLang({
    "lang": e.target.name, "url": EnLang
  }); {console.log({ lang })}; }}>English</Dropdown.Item>
    <Dropdown.Item name="pigLatin" onClick={(e) => {setLang({
    "lang": e.target.name, "url": PlLang
  }); {console.log({ lang })}; }} >Pig Latin </Dropdown.Item> 
  </Dropdown.Menu>
</Dropdown>
{/* <AppContext.Provider>{(Langs) => <h1>{Langs.lang}</h1> }</AppContext.Provider>  */}
 {/* <Lang /> */}
 <h1>{ lang.lang }</h1>
 </>
    );
    }
export default Translate;