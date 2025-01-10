import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar} from 'react-bootstrap';
import logo from "../../assets/logo/img.png";

const chefRegister = "https://docs.google.com/forms/d/e/1FAIpQLSc7dq4kQOYNrF9QIdwiV_Hi0_OEBYUenxwxUMJUvcEJXdTGcg/viewform?usp=dialog"
const eventData = "https://docs.google.com/forms/d/e/1FAIpQLSdNBp_QsAjRTZUPfWWW5XJRGp9VFBuxiCCcm6irP8BDJFK14g/viewform"
const themeExperience = "https://docs.google.com/forms/d/e/1FAIpQLSdS6-fzfUke4eeyAr1hlaVo3HtgAeQLInbUvQK9uYGfz6DqXg/viewform"

export default function Navigation() {

    return (
        <>
            <Navbar expand="lg" className="bg-black shadow-sm">
                <div className='container-xxl'>
                    <Link to="/" className="navbar-brand d-flex align-items-center m-0 p-0">
                        <img
                            src={logo}
                            width={88}
                            height={55}
                            alt="Feastify"
                            style={{objectFit: "cover"}}
                        />
                        <p className="text-white fs-5 fw-bold m-0" style={{font: 'Fredoka'}}> The Feastify</p>
                    </Link>

                    <Navbar.Toggle className='bg-white rounded-3 border-0' aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto align-items-center">
                            <Link to={"/"} className="nav-link text-white fw-semibold me-3">Home</Link>
                            <Link to={"/about-us"} className="nav-link text-white fw-semibold me-3">About Us</Link>
                            <Link to={eventData} className="nav-link text-white fw-semibold me-3">Hire A Private
                                Chef</Link>
                            <Link to={themeExperience} className="nav-link text-white fw-semibold me-3">Themed
                                Experiences</Link>
                        </Nav>

                        <Nav className="align-items-center">
                            <Link className="bg-light text-black btn fw-semibold px-4 py-2 mx-auto rounded-5"
                                  to={chefRegister}>
                                Chef Register
                            </Link>
                        </Nav>

                    </Navbar.Collapse>
                </div>
            </Navbar>

            
        </>
    );
}
