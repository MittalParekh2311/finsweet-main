import React,{useState} from "react";
import { Container ,Row,Col,Image } from "react-bootstrap";
import watchstyle from "../styles/Watchlist.module.css";
import watchjson from "../json/watchlist.json";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

const Watchlist = () =>{
    const[watchData] = useState(watchjson);
    return(
        <>
        <div className={watchstyle.watchitem_section}>
        <Container>
        <AnimationOnScroll animateIn="animate__bounceIn"> 
                <div className={watchstyle.list_heading}>
                <label className={watchstyle.list_title }>Watch and listen</label>
                <h2 className={watchstyle.ourlist_heading }>THE benefits of joining our church</h2>
                </div>
                </AnimationOnScroll>
            <Row>
            {watchData.map((item) => (
                <Col xl={3} lg={3} md={6}  sm={6} xs={12} className={watchstyle.watch_col}>
                <AnimationOnScroll animateIn="animate__fadeInLeft"> 
                <div className={watchstyle.hover_watch}>
                    <Image  src={item.watchlistimg} className={watchstyle.watchimg}/>
                    <div className={watchstyle.our_heading}>
                    <h5 className={watchstyle.watch_heading}>{item.watchlistheading}</h5>
                    <p className={watchstyle.watch_parg }>{item.watchlistdescription}</p>
                    </div>
                    </div>
                    </AnimationOnScroll>
                </Col>
            ))}
            </Row>
        </Container>
        </div>
        </>
    )

}
export default Watchlist;