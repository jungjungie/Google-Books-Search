import React from "react";
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./BookCard.css"

const BookCard = () => {
    return (
        <Card>
            <CardBody>
                <Row className="no-gutters align-items-center">
                    <Col xs="12" md="9">
                        <CardTitle>Title</CardTitle>
                        <CardSubtitle>Written by Author Name</CardSubtitle>
                    </Col>
                    <Col xs="12" md="3">
                        <Button>View</Button>
                        <Button className="ml-3">Save</Button>
                    </Col>
                </Row>

                <Row className="no-gutters align-items-center">
                    <Col xs="12" md="2">
                        <CardImg className="mt-3" src="https://via.placeholder.com/150" alt="Card image cap" />
                    </Col>
                    <Col xs="12" md="10">
                        <CardText className="ml-3">Summary</CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default BookCard;