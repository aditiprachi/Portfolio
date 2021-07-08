import React from 'react'
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'

import {projects} from "./project_data"

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center">Projects</h1>
            <Container>
                <CardGroup>
                <Row className="d-flex justify-content-around">
                        {projects.map((project, index) => (
                             <Col md={6}> 
                                <Card className="focus mt-2 mb-2">
                                    <Card.Body> 
                                        <Card.Text className="card-text d-flex justify-content-start flex-column">
                                            <span className="p-2" key={index}>
                                            <Card.Img variant="top" src={project.projectImg}  />
                                            <a className="text-dark text-decoration-none" href={project.link} >
                                                <Card.Title className="text-center  card-title">{project.projectName}</Card.Title>
                                                <hr />
                                            </a>
                                            <p className="text-dark">{project.projectDesc}</p>
                                            </span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                            ))}
                    </Row>
                </CardGroup>
                </Container>
        </div>
    )
}

export default Projects
