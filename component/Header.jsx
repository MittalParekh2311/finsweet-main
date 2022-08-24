import React,{useState} from "react";
import { Container ,Row ,Navbar,Nav,Link} from "react-bootstrap";
import headerstyle from "../styles/Header.module.css";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

const Header = (obj) => {

  const menuclick = () => {
    obj.setShow(true);
    console.log(obj.show)
  }
  return (
    <>
      <div className={headerstyle.header_section}>
        <Container>
          <Row>
            <Navbar expand="lg">
            <Navbar.Brand href="#home" className={headerstyle.header_brand }>
                <img src="/image/logo.svg" className={headerstyle.logoimg} />
                <div className={headerstyle.divider}></div>
              </Navbar.Brand>
              <NavbarToggle className={headerstyle.menu_icon}  onClick={menuclick}/>
              <NavbarCollapse id="responsive-navbar-nav" className={headerstyle.header_navbar}>
                <Nav className="header_nav">
                  <Nav.Link href="" className={headerstyle.navlink}>Home</Nav.Link>
                  <Nav.Link href="Aboutus" className={headerstyle.navlink}>About Us</Nav.Link>
                  <Nav.Link href="" className={headerstyle.navlink}>Sermon</Nav.Link>
                  <Nav.Link href="" className={headerstyle.navlink}>Blog</Nav.Link>
                </Nav>
                <button className={headerstyle.contact_btn}> Contact us</button>
              </NavbarCollapse>
            </Navbar>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Header;
