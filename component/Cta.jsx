import React from "react";
import ctastyle from "../styles/Cat.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
const Cta = () => {
  return (
    <>
      <div className={ctastyle.cta_section}>
        <img src="/image/Background.png" className={ctastyle.ctaimg} />
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={6} xs={6} className={ctastyle.cta_col}>
              <div className={ctastyle.cta_inner}>
                <div className={ctastyle.inner_heading_img}>
                  <h2 className={ctastyle.inner_heading}>
                    We want to serve the world around us
                  </h2>
                  <Image src="/image/qoute.svg" className="w-25" />
                </div>
                <p className={ctastyle.inner_parg}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do.
                </p>
                <button className={ctastyle.visit_btn}>Visit</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Cta;
