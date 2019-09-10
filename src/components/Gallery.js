import React, { useContext } from 'react';
import { Carousel, Image, Container, Row, Col } from 'react-bootstrap';
import { LangContext }  from '../LangContext';
import IFrame  from 'react-iframe';
function Gallery() {
    const [lang, setLang] = useContext(LangContext);
    const url = lang.data['video-embed'];
    const gallerySrc  = lang.data.gallery;
    const listGallery = gallerySrc.map((gallerySrc, index) =>
    <Carousel.Item key={ index } className="gallery-item fluid">
        <Image src={gallerySrc.src} alt=""   />
    <Carousel.Caption  className="bg-dark">
        <p> {gallerySrc.text} </p>
    </Carousel.Caption>
    </Carousel.Item>);
    return (<Container id="gallery" className="section-spacing">
        <Row>
            <Col xs={12} md={6}> 
            <Carousel className="d-block w-100" >{listGallery}</Carousel>
            </Col>
            <Col xs={12} md={6}>
            <IFrame url={ url }
            width = "640"
            height = "400"
            frameborder = "0"
            allowfullscreen = "true" /> 
            </Col>
        </Row>
    </Container>);
    };
export default Gallery;