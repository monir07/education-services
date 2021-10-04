import React from 'react';
import { Card } from 'react-bootstrap';

const NotFound = () => {
    const img = 'https://vectorforfree.com/wp-content/uploads/2020/03/Error_404_VectroForFree.png';
    return (
        <div>
            <div className="container">
                <Card className="text-center">
                    <Card.Body>
                        <Card.Img variant="top" src={img} className="imageFluid" />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default NotFound;