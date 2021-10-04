import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fake-data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <div className="col-md-12 row">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;