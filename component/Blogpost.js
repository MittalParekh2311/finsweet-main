import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import blogstyle from "../styles/Blogpost.module.css";
import Blogpostjson from "../json/blogpost.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Blogpost = () => {
  const [blogpostData] = useState(Blogpostjson);
  return (
    <>
      <div className={blogstyle.blogpost_section}>
        <Container>
        <AnimationOnScroll animateIn="animate__bounceIn"> 
          <div className={blogstyle.blogpost_main_heading}>
            <label className={blogstyle.blog_title}>Read our Blog</label>
            <h2 className={blogstyle.blog_heading}>SHARE, INSPIRE, INNOVATE</h2>
          </div>
          </AnimationOnScroll>
          <Row>
            {blogpostData.map((item) => (
              <Col xl={3} lg={3} md={6} sm={6} xs={12} className={blogstyle.blogpost_col} >
              <AnimationOnScroll animateIn="animate__fadeInUp"> 
              <div className={blogstyle.blogpost }> 
                <div className="blog_content">
                  <label className={blogstyle.content_title }>{item.blogposttitle}</label>
                  <h5 className={blogstyle.content_heading }>{item.blogpostheading}</h5>
                  <p className={blogstyle.cont_parg}>{item.blogpostdescription}</p>
                </div>
                <div className={blogstyle.blog_content2}>
                  <span className={blogstyle.name_authore}>{item.blogpostauthor}</span>
                  <span className={blogstyle.date}>{item.blogpostdate}</span>
                </div>
                </div>
                </AnimationOnScroll>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Blogpost;
