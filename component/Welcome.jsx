import React, { useState } from "react";
import { Container, Row, Col ,Button,Image } from "react-bootstrap";
import welstyle from "../styles/Welcome.module.css";
import Lovejson from "../json/love.json";
import Masonry from "react-masonry-css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Welcome = () => {
  const [welcomeData] = useState(Lovejson);
  
  const breakpoints = {
    default: 3,
    1199: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
   <div className={welstyle.love_section}>
      <Container>
      <AnimationOnScroll animateIn="animate__bounceIn"> 
      <div className={welstyle.love_main_heading}>
          <label className={welstyle.love_title}>sub-headline</label>
          <h2 className={welstyle.love_heading}> love and compassion</h2>
          <p className={welstyle.parag}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <button className={welstyle.readmore_btn}> Read more</button>
        </div>
        </AnimationOnScroll>
        <Row>
        <AnimationOnScroll animateIn="animate__fadeInDown"> 
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={welstyle.Subheadline_col1}
            >
              <Image src="/image/loveimg1.svg" className={welstyle.Subheadline_img} />
            </Col>
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={welstyle.Subheadline_col2}
            >
              <Image src="/image/loveimg2.svg" className={welstyle.Subheadline_img1} />
            </Col>
            <Col
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={welstyle.Subheadline_col3}
            >
              <Image src="/image/loveimg3.svg" className={welstyle.Subheadline_img} />
            </Col>
          </Masonry>
          </AnimationOnScroll>
        </Row>
        <AnimationOnScroll animateIn="animate__fadeInLeft"> 
         <div className={welstyle.vision}>
              <label className={welstyle.vision_title}>
                our mission & vision
              </label>
              <h4 className={welstyle.vision_heading}>celebrate WITH US</h4>
              <p className={welstyle.vision_parg}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className={welstyle.read_btn}>Read More</button>
              <img src="/image/rightarrow.svg" />
            </div>
        </AnimationOnScroll>
      </Container>
    </div>
    </>
  );
};
export default Welcome;
