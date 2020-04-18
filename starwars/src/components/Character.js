// Write your Character component here
import React from 'react';
import {CardImg, Card, CardBody, CardTitle, CardSubtitle, CardText, Col} from 'reactstrap'




const Character = ({data}) => {

return(
    <Col>
    <Card>
        <CardImg src={data.image} alt="Card image cap" />
        <CardBody>
        <CardTitle>Name: {data.name}</CardTitle>
        <CardSubtitle>Current location: {data.location.name}</CardSubtitle>
        <CardSubtitle>Origin: {data.origin.name}</CardSubtitle>
        <CardText>Species: {data.species}</CardText>
        <CardText>Gender: {data.gender}</CardText>
        <CardText>Current status: {data.status}</CardText>
        </CardBody>
    </Card>
    </Col>
)}

export default Character;