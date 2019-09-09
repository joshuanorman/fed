import React, { useContext} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LangContext } from '../LangContext';
import wordsToNumbers from 'words-to-numbers';
function About() {
    const [lang, setLang] = useContext(LangContext);
    const content = lang.data.description;
    return (
        <>
        <Container id="about" className="section-spacing">
        <Row>
        <Col xs={12} md={6}>
            <Image src='/images/stanger-things_raw.png' fluid/>
        </Col>
        <Col xs={12} md={6}>
            { content }
        </Col>
        </Row>
            </Container>
        </>
        );
}

export default About;