import React from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#151515] text-white font-inter items-center">
            <aside>
                <img src="/src/assets/logo.svg" alt="" />
                <p className='max-w-[250px] text-[#E8E8E8]'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                <span className='text-2xl mt-3 flex gap-3'>
                    <FaGoogle></FaGoogle>
                    <FaTwitter></FaTwitter>
                    <FaLinkedin></FaLinkedin>
                    <FaInstagram></FaInstagram>
                </span>
            </aside>
            <nav>
                <h6 className="footer-title">About</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">Car Top</a>
                <a className="link link-hover">About</a>
            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accesbility</a>
            </nav>
        </footer>
    );
};

export default Footer;