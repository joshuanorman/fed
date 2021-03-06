import React, { useContext} from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { LangContext } from '../LangContext';
import wordsToNumbers from 'words-to-numbers';

function Episodes() {
    const [lang, setLang] = useContext(LangContext);
    const content = lang.data.description;
    const order = lang.data['episode-list'];
    const seasonOne = order.filter(item => item.season === 1);
    const seasonTwo = order.filter(item => item.season === 2);
    const seasonOneNumbered = seasonOne.map(item => wordsToNumbers(item.name)).sort();
    const seasonTwoNumbered = seasonTwo.map(item => wordsToNumbers(item.name)).sort();
    const episodesOne = seasonOneNumbered.map((seasonOneNumbered, index ) => 
        <ListGroup.Item key={ index } >{ seasonOneNumbered }  </ListGroup.Item >
        );
    const episodesTwo = seasonTwoNumbered.map((seasonTwoNumbered, index ) => 
        <ListGroup.Item key={ index } >{ seasonTwoNumbered }  </ListGroup.Item >
        );
        return( <Container id="episodes" className="section-spacing"><Row><Col xs={12} md={6}><ListGroup variant="flush" ><h2>Season One:</h2><br />{ episodesOne }</ListGroup></Col>
        <Col xs={12} md={6}><ListGroup variant="flush" ><h2>Season Two:</h2><br />{ episodesTwo }</ListGroup></Col></Row></Container>
        );
    
}

export default Episodes;