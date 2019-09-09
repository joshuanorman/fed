import React, { useContext } from 'react';
import { Carousel, Image, Container, Row, Column, Col } from 'react-bootstrap';
import { LangContext }  from '../LangContext';

function Gallery() {
    const [lang, setLang] = useContext(LangContext);
    const gallerySrc  = lang.data.gallery;
    const listGallery = gallerySrc.map((gallerySrc, index) =>
    <Carousel.Item key={ index } className="gallery-item">
        <Image src={gallerySrc.src} alt="" fluid d-block  />
    <Carousel.Caption bg-dark mb-4 >
        <p> {gallerySrc.text} </p>
    </Carousel.Caption>
    </Carousel.Item>);
    return (<Container id="gallery" className="section-spacing"><Row><Col xs={12} md={6}> <Carousel className="d-block w-100" >{listGallery}</Carousel></Col><Col></Col></Row></Container>);
    };
export default Gallery;