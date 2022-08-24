import React ,{useState} from "react";
import Head from 'next/head'
import Image from 'next/image'
import Header from '../component/Header'
import Footer from "../component/Footer"
import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from '../component/Banner'
import Relevent from '../component/Relevent'
import Slidebar from '../component/Sidebar'
import Welcome from "../component/Welcome";
import Watchlist from "../component/Watchlist";
import Upcoming from "../component/Upcoming";
import Cta from "../component/Cta";
import Blogpost from "../component/Blogpost";


export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
   <>
   <Header obj={{show:show,setShow:setShow}} />
   {/* <Slidebar obj={{show:show,setShow:setShow}}/> */}
   <Banner />
   <Relevent />
   <Welcome />
   <Watchlist />
   <Upcoming />
   <Cta />
   <Blogpost />
   <Footer />
  
   </>
  )
}
