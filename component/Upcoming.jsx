import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import upstyle from "../styles/Upcoming.module.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Upcoming = () => {
  return (
    <>
      <div className={upstyle.upcoming_section}>
        <Container>
        <AnimationOnScroll animateIn="animate__bounceIn"> 
          <div className={upstyle.upcoming_main_heading}>
            <label className={upstyle.upcoming_title}>Upcoming SERMONS</label>
            <h2 className={upstyle.upcoming_heading}>
              join us and become part of something great
            </h2>
          </div>
          </AnimationOnScroll>
          <Row className={upstyle.row_up}>
            <Col xl={4} lg={4} md={12}   className={upstyle.upcoming_cont}>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <div >
                <div className={upstyle.upcoming_date}>
                  <h5 className={upstyle.info_date}> 20</h5>
                  <span className={upstyle.info_month}>JULY</span>
                </div>
                <div className="upcoming_info">
                  <label className={upstyle.info_title}>Upcoming Event</label>
                  <h5 className={upstyle.info_heading}>
                    WATCH AND LISTEN TO OUR SERMONS
                  </h5>
                  <p className={upstyle.info_parg}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <div className={upstyle.time}>
                  <Image src="/image/clock.svg" className="clockicon" />
                  <p className={upstyle.time_parg}>
                    Friday 23:39 IST Saturday 11:20 ISD
                  </p>
                </div>
                <div className={upstyle.location}>
                  <Image src="/image/location.svg" className="locationicon" />
                  <p className={upstyle.location_parg}>
                    No 233 Main St. New York, United States
                  </p>
                </div>
                <button className={upstyle.reg_btn}> Register</button>
              </div>
              </AnimationOnScroll>
            </Col>
            <Col xl={8} lg={8}>
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <Image src="/image/upimg.png" className={upstyle.seromimg} />
              </AnimationOnScroll>
            </Col>
            <p className={upstyle.view}>
              View all Sermons{" "}
              <img src="/image/rightarrow.svg" className={upstyle.arrowimg} />
            </p>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Upcoming;
