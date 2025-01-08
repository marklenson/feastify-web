import footerLogo from '../../assets/logo/footer-logo-.png'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {faTiktok, faInstagram, faLinkedin, faCcVisa, faApplePay, faCcMastercard} from '@fortawesome/free-brands-svg-icons';

const eventData = "https://docs.google.com/forms/d/e/1FAIpQLScd4TSKuvPKH8dXynOnOT3JTJDDyxd0Ghsy7451PMyqSLCmmw/viewform"
const chefRegister = "https://docs.google.com/forms/d/e/1FAIpQLSc7dq4kQOYNrF9QIdwiV_Hi0_OEBYUenxwxUMJUvcEJXdTGcg/viewform?usp=dialog"
const themeExperience = "https://docs.google.com/forms/d/e/1FAIpQLSdS6-fzfUke4eeyAr1hlaVo3HtgAeQLInbUvQK9uYGfz6DqXg/viewform"


export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section>
                <div className="container d-flex flex-column">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center p-2">
                            <img src={footerLogo} alt="Footer Logo" className='mx-auto' style={{
                                objectFit: 'scale-down',
                                height: '200px',
                            }}/>
                        </div>
                        <div className="col-md-3 p-4 text-center text-md-start">
                            <p className="fs-5 fw-medium" style={{ font: 'Nunito', color: '#FB9D00' }}>Main Links</p>
                            <p className="fs-6 fw-normal">
                                <Link to={eventData} className="text-dark text-decoration-none"
                                      rel="noopener noreferrer" style={{ font: 'Nunito'}}>
                                    Hire Private Chefs
                                </Link>
                            </p>
                            <p className="fs-6 fw-normal">
                                <Link to={themeExperience} className="text-dark text-decoration-none"
                                      rel="noopener noreferrer" style={{ font: 'Nunito'}}>
                                    Group Experiences
                                </Link>
                            </p>
                            <p className="fs-6 fw-normal">
                                <Link to="/contact-us" className="text-dark text-decoration-none"
                                      rel="noopener noreferrer" style={{ font: 'Nunito'}}>
                                    Contact Us
                                </Link>
                            </p>
                            <p className="fs-6 fw-normal">
                                <Link to={chefRegister} className="text-dark text-decoration-none"
                                      rel="noopener noreferrer" style={{ font: 'Nunito'}}>
                                    Chef Register
                                </Link>
                            </p>
                        </div>

                        <div className="col-md-3 p-4 text-center text-md-start">
                            <p className="fs-5 fw-medium" style={{ font: 'Nunito', color: '#FB9D00' }}>Legal</p>
                            <p className="fs-6 fw-normal">
                                <Link className="text-dark text-decoration-none" to="#" style={{ font: 'Nunito'}}>Terms & Conditions</Link>
                            </p>
                            <p className="fs-6 fw-normal">
                                <a className="text-dark text-decoration-none" href="#faq-section" style={{ font: 'Nunito',fontWeight: 380 }}>FAQ</a>
                            </p>

                            <p className="mt-3 fs-5 fw-medium" style={{ font: 'Nunito', color: '#FB9D00' }}>Payment Accepted</p>
                            <div className="d-flex justify-content-center justify-content-md-start">
                                <FontAwesomeIcon className="fa-2xl mx-1" icon={faCcVisa} />
                                <FontAwesomeIcon className="fa-2xl mx-1" icon={faCcMastercard} />
                                <FontAwesomeIcon className="fa-2xl mx-1" icon={faApplePay} />
                            </div>
                        </div>

                    </div>
                    <hr/>
                    <div className="d-flex flex-column align-items-center mb-3">
                    <div className="d-flex flex-row mb-3" style={{onHover: 'red'}}>
                        <a href="https://www.tiktok.com/@thefeastify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="fa-3x btn" icon={faTiktok} style={{fontSize:'1.4rem'}} />
                        </a>
                        <a href="https://www.linkedin.com/company/thefeastify/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="fa-3x btn" icon={faLinkedin} style={{fontSize:'1.4rem'}} />
                        </a>
                        <a href="https://www.instagram.com/thefeastify/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="fa-3x btn" icon={faInstagram} style={{fontSize:'1.4rem'}} />
                        </a>
                    </div>
                        <p className="fs-6 fw-light text-center w-100 m-0 text-capitalize" style={{font:'Nunito'}}>
                            <span className="fw-medium">The Feastify Global Limited.</span>
                            <br/>
                            &copy; {currentYear} <span className="text-muted">-</span> All rights reserved.

                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}