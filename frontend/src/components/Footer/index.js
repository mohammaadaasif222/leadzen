import React from "react";
import "../Footer/Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { ImYoutube2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="container-fluid bg-grey">
      <div className="row">
        <div className="col-md-6 footer pt-3">
          <ul className="justify-content-end">
            <li>SUPPORT</li>
            <li>NOW TRENDING</li>
            <li>COMPANY</li>
            <li>REFUND POLICY</li>
            </ul>
            </div>
            <div className="col-md-6 footer pt-3"  >
            <ul className="justify-content-start pl-0">
            <li>PRIVACY POLICY</li>
            <li>RETURN POLICY</li>
            <li>FASHION AWARDS</li>
            <li>DELIVERY POLICY</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 footer">
          <ul>
            <li>CONTACT US</li>
            <li>SITEMAP</li>
            <li>STORE LOCATOR</li>
            <li>INVESTOR RELATIONS</li>
            <li> BLOG</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 icon-conatiner pt-2 pb-3 footer">
          <GrFacebookOption className="social-icons"/>
          <BsInstagram className="social-icons" />
          <ImYoutube2 className="social-icons" />
          <BsTwitter className="social-icons" />
          <BsWhatsapp className="social-icons"/>
        </div>
      </div>
      <div className="container p-3">
      <p className="footer-para text-center">Email Us -<a href="www.gmail.com"> kasifsaif784@gmail.com</a> or call us at<a href="#"> +91-9634135114</a> or WhatsApp at<a href="www.whatsapp.com">+91-9634135114</a> (from 10 AM to 6 PM, Mon to Sun). We are closed on bank holidays.</p>
      </div>
    </div>
  );
};
export default Footer;
