import React, { useContext } from 'react';
import EnLang from '../data/en_US.json';
import PlLang from '../data/la_PG.json';
import Dropdown from 'react-bootstrap/Dropdown';
import { LangContext }  from '../LangContext';

function Translate() {
    const [lang, setLang] = useContext(LangContext);
    return (<>
  <Dropdown>
  <Dropdown.Toggle variant="danger" id="dropdown-basic">
    Language
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item name="english" onClick={(e) => {setLang({
     'data': EnLang
  });}}>English</Dropdown.Item>
    <Dropdown.Item name="pigLatin" onClick={(e) => {setLang({
     'data': PlLang
  });}}>Pig Latin </Dropdown.Item> 
  </Dropdown.Menu>
</Dropdown>
 </>
    );
    }
export default Translate;