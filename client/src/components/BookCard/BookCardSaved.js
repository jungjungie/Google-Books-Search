import React from "react";
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import "./BookCard.css"

const BookCardSaved = props => {
    return (
        <Card className="shadow-sm">
            <CardBody>
                <Row className="no-gutters">
                    <Col xs="12" md="9">
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle className="mb-3">Written by {props.authors}</CardSubtitle>
                    </Col>
                    <Col xs="12" md="3">
                        <div className="btnWrapper">
                            <a className="btn viewBtns" href={props.link} target="_blank" rel="noopener noreferrer">View</a>
                            <Button onClick={() => props.deleteBook(props.id)} data-title={props.title} data-authors={props.authors} data-description={props.description} data-image={props.image} data-link={props.link} className="deleteBtns ml-3">Delete</Button>
                        </div>
                    </Col>
                </Row>

                <Row className="no-gutters">
                    <Col xs="12" md="2">
                        {/* Renders the image only if props.image is not "" */}
                        {props.image !== "" &&
                            <CardImg className="img-fluid mt-1 mb-3" src={props.image} alt={props.title} />}
                    </Col>
                    <Col xs="12" md="10">
                        <CardText className="ml-3">{props.description}</CardText>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default BookCardSaved;