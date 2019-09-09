import React, { useContext } from 'react';
import { Carousel, Image, Container, Row, Column, Col } from 'react-bootstrap';
import { LangContext }  from '../LangContext';
import ReactPlayer from 'react-player';
function Gallery() {
    const [lang, setLang] = useContext(LangContext);
    const url = lang.data['video-embed'];
    console.log(url);
    const gallerySrc  = lang.data.gallery;
    const listGallery = gallerySrc.map((gallerySrc, index) =>
    <Carousel.Item key={ index } className="gallery-item">
        <Image src={gallerySrc.src} alt="" fluid d-block  />
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
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={ url }
                    width='100%'
                    height='100%'
                />
            </div>
            </Col>
        </Row>
    </Container>);
    };
export default Gallery;