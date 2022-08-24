import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import bannerstyle from "../styles/Banner.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Banner = () => {
  return (
    <>
      <div className={bannerstyle.banner_section}>
        <img src="/image/banner.svg" className={bannerstyle.banner_img} />
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6}>
              <div className={bannerstyle.banner_conte}>
              <AnimationOnScroll animateIn="animate__fadeInDown"> 
                <div className="banner_heading_cont">
                  <h5 className={bannerstyle.banner_title}>
                    {" "}
                    Welcome to our CHURCH
                  </h5>
                  <h1 className={bannerstyle.banner_heading}>
                    Become a part of our community
                  </h1>
                  <button className={bannerstyle.learnmore_btn}>
                    Learn more
                  </button>
                  <p className={bannerstyle.banner_parag}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do.
                  </p>
                </div>
                </AnimationOnScroll>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Banner;
