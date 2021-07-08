import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './News.css'

const News = (props) => {
    const { title, description } = props.article;
    return (
        
        <Container>
        <Row>
          <Col>
          <Card className="gap" style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                <Button variant="danger">Danger</Button>
            </Card.Body>
        </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default News;