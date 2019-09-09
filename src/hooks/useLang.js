import { useContext } from 'react';
import { LangContext } from '../LangContext';


let useLang = () => {
    const [lang, setLang] = useContext(LangContext);
    function CurrentLang(){
    if(lang === 'english'){
        useLang = require('../data/en_US.json'); 
    }
    if(lang === 'pigLatin'){
        useLang = require('../data/la_PG.json');
    }
    return  CurrentLang;
}
}
export default useLang;
