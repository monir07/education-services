import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const Service = (props) => {
    const { course_name, description, price, image } = props.service
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{course_name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="warning" style={{ marginRight: '10px' }}>${price}</Button>
                <Button variant="danger">Buy</Button>
            </Card.Body>
        </Card>
    );
};

export default Service;