import React from 'react'
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./footer.css"

const Footer = () => {
    return (
        <div id="footer">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:aditiprachi21@gmail.com" target="_blank" rel="noopener noreferrer">              
                  <i className="fas fa-envelope-square"></i> 
                </a>  
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/aditi-prachi-61a18b195/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i> 
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/aditiprachi" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github-square"></i>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/prachiaditi" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/adaditi21" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-square"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
        <div className="py-2 text-center"> © ADITI PRACHI &nbsp; {new Date().getFullYear()}</div>
        </Row>
        </div>
    )
}

export default Footer
