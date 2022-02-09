import './App.css';
import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import {Header} from "./components/Header";
import {About} from "./components/About";
import {Search} from "./components/Search";

function App() {
    return (
        <div className="app">
            <Container fluid="md">
                <Row>
                    <Col><Header/></Col>
                </Row>
                <Row>
                    <Col><About/></Col>
                </Row>
                <Row>
                    <Col><Search/></Col>
                </Row>
                <Row>
                    <Col>footer</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
