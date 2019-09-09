import React, { useContext } from 'react';
import { enLangData, pgLangData} from '../dataConsts';
import PlLang from '../data/la_PG.json';
import Translate from './Translate.js';
import { Carousel, Image } from 'react-bootstrap';
import { LangContext }  from '../LangContext';
import useLang from '../hooks/useLang';
import listReactFiles from 'list-react-files';
import { langFiles } from '../testnode';

import fs from 'browserify-fs';
import wordsToNumbers from 'words-to-numbers';

function Gallery() {
    const [lang, setLang] = useContext(LangContext);
    let wordsTest = wordsToNumbers("I have twenty five ");
    // const CurrentLang = lang;
    // console.log(CurrentLang);
    const gallerySrc  = lang.data.gallery;
    const listGallery = gallerySrc.map((gallerySrc, index) =>
    <Carousel.Item key={ index }>
        <Image src={gallerySrc.src} alt="" fluid />
    <Carousel.Caption>
        <p> {gallerySrc.text} </p>
    </Carousel.Caption>
    </Carousel.Item>);
    return (<> <p>  <br />{ console.log(lang) } </p> <Carousel className="d-block w-100" >{listGallery}</Carousel></>);
    };
export default Gallery;