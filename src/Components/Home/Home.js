import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fake-data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <div className="col-md-12">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.10minuteschool.com/images/skills/thumbnails-v3/Facebook%20Marketing_Landscape.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.10minuteschool.com/images%2Fskills%2Fjpeg%2FGhore-Boshe-Freelancing---Title-thumbnail.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://cdn.10minuteschool.com/images%2Fskills%2Fjpeg%2FMicrosoft-PowerPoint-%28Beginner-to-Expert%29---Title-Thumbnail.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="col-md-12 row justify-content-md-center">
                {
                    services.map((service, index) => (
                        index > 8
                            ? <Service key={service.id} service={service}></Service>
                            : null
                    ))
                }
            </div>
        </div>
    );
};

export default Home;