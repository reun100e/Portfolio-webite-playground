import React from "react";
import "./footer.css";

import logo from "../../assets/logo.png";

import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerMain">
        <div className="footerDesc">
          <img className="f_logo" src={logo} alt="logo" />
          <p>
            Hi, I am a front end developer based on Trivandrum, Kerala. I design
            amazing UI/UX web apps. Connect with me on social medias.
          </p>
          <div className="footerSocialLinks">
            <img src={facebookIcon} alt="facebook" className="c_link" />
            <img src={twitterIcon} alt="twitter" className="c_link" />
            <img src={youtubeIcon} alt="youtube" className="c_link" />
            <img src={instagramIcon} alt="instagram" className="c_link" />
          </div>
        </div>

        <div className="footerContact, footerDiv">
          <p className="footerContactHeading">GET IN TOUCH</p>

          <table className="footerContactTable">
            <tbody>
              <tr>
                <td>
                <img src={instagramIcon} alt="instagram" className="contactIcon, c_call" />
                </td>
                <td>+91 9446900640</td>
              </tr>
              <tr>
                <td>
                <img src={instagramIcon} alt="instagram" className="contactIcon, c_email" />
                </td>
                <td>aghoshbprasad100@gmail.com</td>
              </tr>
              <tr>
                <td>
                <img src={instagramIcon} alt="instagram" className="contactIcon, c_address" />
                </td>
                <td>
                  15/393, Vasantha Cottage, Venganoor, Thriuvananthapuram,
                  Kerala, India
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="footerWorkingHours, footerDiv">
          <p className="footerWorkingHoursHeading">WORKING HOURS</p>
          <table className="footerWorkingHoursTable">
            <tbody>
              <tr>
                <td id="tableDate">Mon - Fri</td>
                <td>:</td>
                <td id="tableTime">10am - 7pm</td>
              </tr>
              <tr>
                <td id="tableDate">Saturday</td>
                <td>:</td>
                <td id="tableTime">10am - 5pm</td>
              </tr>
              <tr>
                <td id="tableDate">Sunday</td>
                <td>:</td>
                <td id="tableTime">By call</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="divider"></div>

      <span className="footerCopyright">
        Copyright &#169; 2023 Swith Williams. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
