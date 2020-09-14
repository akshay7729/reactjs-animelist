import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ListCard = (props) => {
  return (
    <Col md={3} className="mb-4 listcard">
      <Card className="w-100">
        <Card.Img
          variant="top"
          className="listcard-img"
          src={props.list.image_url}
        />
        <Card.Body>
          <Card.Title className="text-center listcard-title">
            {props.list.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListCard;
