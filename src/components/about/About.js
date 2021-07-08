import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Profile from "../../assets/img/profile/profile2.jpeg"
import "./about.css"

const About = () => {
    return (
        <div id="about">
            <h1 className="pt-3 text-center">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row >
                            <Image className="profile"src={Profile}  roundedCircle/>
                        </Row>
                        
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            <h1>Hello there! I am <strong>&nbsp;Aditi Prachi</strong></h1>
                            <p>
                                I am a Information Science student pursuing BE from Sir MVIT.
                                I am a Full Stack Developer. 
                                I have knowledge of software engineering subjects like Data Structures, Algorithms, DBMS, Operating System, 
                                Computer Networks etc.
                                I love writing poems and reading books.
                                I believe writing down your thoughts are the best way to express and. So,
                                
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
