import React from "react";

import { Col } from "react-bootstrap";

const Love = (props) => {
    const {loveimg } = props.data;
    return(
        <>
         <Col xl={4} lg={4} md={4}>
        <img src={loveimg} className="loveimg"  />
         </Col>
        </>
    )
}
export default Love;