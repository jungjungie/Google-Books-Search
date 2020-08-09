import React from "react";
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./BookCard.css"

const BookCard = props => {
    return (
        <Card>
            <CardBody>
                <Row className="no-gutters align-items-center">
                    <Col xs="12" md="9">
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>Written by {props.authors}</CardSubtitle>
                    </Col>
                    <Col xs="12" md="3">
                        <Button>View</Button>
                        <Button className="ml-3">Save</Button>
                    </Col>
                </Row>

                <Row className="no-gutters align-items-center">
                    <Col xs="12" md="2">
                        <CardImg className="mt-3" src={props.image} alt="Card image cap" />
                    </Col>
                    <Col xs="12" md="10">
                        <CardText className="ml-3">{props.description}</CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default BookCard;