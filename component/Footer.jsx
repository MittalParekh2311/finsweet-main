import React from "react";
import { Container, Row, Col, NavLink ,InputGroup ,FormControl } from "react-bootstrap";
import footerstyle from "../styles/Footer.module.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


const Footer = () => {
  return (
    <>
      <div className={footerstyle.footer_section}>
        <Container>
          <Row>
            <Col xl={4} lg={3} md={6} sm={6} xs={12}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <img src="/image/footerlogo.svg"/>
              <div className={footerstyle.address}>
                <p className={footerstyle.footer_address }> (480) 555-0103</p>
                <p className={footerstyle.footer_address }>4517 Washington Ave. </p>
                <p className={footerstyle.footer_address }>finsweet@example.com</p>
              </div>
              </AnimationOnScroll>
            </Col>
           
              <Col xl={1} lg={2} md={6} sm={6} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInUp"> 
                <h5 className={footerstyle.footer_heading }>Quicklinks</h5>
                <NavLink href="" className={footerstyle.footer_link}>About Us</NavLink>
                <NavLink href="" className={footerstyle.footer_link}>Sermons</NavLink>
                <NavLink href="" className={footerstyle.footer_link}>Events</NavLink>
                <NavLink href="" className={footerstyle.footer_link}>Blog</NavLink>
                </AnimationOnScroll>
              </Col>
              <Col xl={2} lg={2} md={6} sm={6} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInDown">
                <h5 className={footerstyle.footer_heading }>Connect </h5>
                <div className={footerstyle.footer_social_icon }>
                <NavLink  xl={3} lg={3} md={3} sm={3} className={footerstyle.footer_imglink} ><img src="/image/facebook.svg" /></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3} className={footerstyle.footer_imglink}><img src="/image/twitter.svg" /></NavLink>
                <NavLink  xl={3} lg={3} md={3} sm={3} className={footerstyle.footer_imglink}><img src="/image/linkdel.svg" /></NavLink>
                </div>
                </AnimationOnScroll>
              </Col>
              <Col xl={5} lg={5} md={6} sm={6} xs={12}>
              <AnimationOnScroll animateIn="animate__fadeInDown">
                <h5 className={footerstyle.heading_news}>Subscribe to get Latest <br/> Updates and News </h5>
                <InputGroup className="mt-4">
                <FormControl
                  placeholder="Yourmail@gmail.com"
                  className={footerstyle.mailinput}
                />
                <button className={footerstyle.subscribe_btn}>Subscribe</button>
              </InputGroup>
              </AnimationOnScroll>
              </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
