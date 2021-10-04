import React from 'react';
import { Card } from 'react-bootstrap';
const Footer = () => {
    return (
        <div>
            <Card className="text-center bg-warning" variant="dark" style={{ left: '0', bottom: '0' }}>
                <Card.Body>
                    <Card.Text>
                        <p>Copyright &copy; 2020-2021 Online-Education.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Footer;