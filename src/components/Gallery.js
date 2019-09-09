import React, { useContext } from 'react';
import { Carousel, Image, Container, Row, Col } from 'react-bootstrap';
import { LangContext }  from '../LangContext';
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';
function Gallery() {
    const [lang, setLang] = useContext(LangContext);
    const url = lang.data['video-embed'];
    const gallerySrc  = lang.data.gallery;
    const listGallery = gallerySrc.map((gallerySrc, index) =>
    <Carousel.Item key={ index } className="gallery-item fluid ">
        <Image src={gallerySrc.src} alt=""   />
    <Carousel.Caption className="bg-dark mb-4" >
        <p> {gallerySrc.text} </p>
    </Carousel.Caption>
    </Carousel.Item>);
    return (<Container id="gallery" className="section-spacing">
        <Row>
            <Col xs={12} md={4}> 
            <Carousel className="d-block w-100" >{listGallery}</Carousel>
            </Col>
            <Col xs={12} md={8}>
            <Player><source src={ url } /></Player>
            </Col>
        </Row>
    </Container>);
    };
export default Gallery;