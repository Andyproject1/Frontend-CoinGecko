import React from "react";
import logo from './logo.png';
import { Container, Row, Col } from "reactstrap";

const Logo = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md="12" className="text-center">
                        <img src={logo} alt="Logo" />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Logo;