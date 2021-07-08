import React from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "./experience.css"

const Experience = () => {
    return (
        <div id="exp">
            <h1 className="pt-3 text-center pb-3">Experience</h1>
            <div  className="jumbo-style jumbotron">
            <Container >
                    <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        <h1>Startup.Inc</h1>
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">Frontend Development Intern</Card.Title>
                        </div>
                        <div>
                        <Card.Text className="text-center style">
                            <strong>Technology:</strong> HTML , CSS , Bootstrap , Material Ui , Javascript
                            <br />
                            <strong>Duration:</strong> July 2020 - July 2020
                            <br/>
                            <strong> Description: </strong>
                            <p>
                                I have worked for one month on a few things. this was a front end development internship which
                                required the skills in HTML, CSS and Javascript. I built a few static designs for cafes, resturants.
                                yoga classes etc. 
                                I worked on making Facebook frontend clone as well.
                            </p>
                        </Card.Text>
                        </div>
                    </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default Experience
