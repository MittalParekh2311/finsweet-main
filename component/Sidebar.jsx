import React from "react";
import { Container ,Row ,Col,Nav} from "react-bootstrap";
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
} from "react-offcanvas";

const Slidebar = (obj) => {
    
  const onClick = () => {
    obj.setShow(false);
  };

  return (
    <>
      <Offcanvas show={obj.show} onHide={onClick}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>Offcanvas</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Container>
            <Row>
              <Col>
              <Nav className="header_nav">
                  <Nav.Link href="" >Home</Nav.Link>
                  <Nav.Link href="">About Us</Nav.Link>
                  <Nav.Link href="">Sermon</Nav.Link>
                  <Nav.Link href="">Blog</Nav.Link>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col>
                <Nav.Link href="/TimeScheduler">TimeScheduler</Nav.Link>
              </Col>
            </Row>
          </Container>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};
export default Slidebar;
