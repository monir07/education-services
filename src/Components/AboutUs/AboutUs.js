import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const AboutUs = () => {
    // ABOUT  US IMAGE LINK 
    const img = 'https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg';
    return (
        <div className="container">
            <Card className="text-center">
                <Card.Body>
                    <Card.Img variant="top" src={img} className="imageFluid" />
                    <Card.Text>
                        WebsiteName is a Professional WebsiteType Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of WebsiteType, with a focus on dependability and Website Speciality. We're working to turn our passion for WebsiteType into a booming online website. We hope you enjoy our WebsiteType as much as we enjoy offering them to you.

                        I will keep posting more important posts on my Website for all of you. Please give your support and love.
                    </Card.Text>
                    <Card.Footer><h2><Badge bg="primary">Thanks For Visiting Our Site</Badge></h2> </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AboutUs;