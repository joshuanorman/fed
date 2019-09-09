import React, { useContext} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { LangContext } from '../LangContext';
import wordsToNumbers from 'words-to-numbers';
function About() {
    const [lang, setLang] = useContext(LangContext);
    const order = lang.data['episode-list'];
    console.log(lang.data);
    const seasonTwo = order.filter(item => item.season === 2);
    const seasonTwoNumbered = seasonTwo.map(item => wordsToNumbers(item.name)).sort();
    console.log(seasonTwoNumbered)
    const content = lang.data.heading;
    console.log(content);
    return (
        <>
        <Container id="About">
        <Row>
        <Col xs={12} md={8}>
            <Image src='/images/stanger-things_raw.png' fluid/>
        </Col>
        <Col xs={6} md={4}>
            { content }
        </Col>
        </Row>
            </Container>
        </>
        );
}

export default About;