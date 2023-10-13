import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import whatsapp_icon from "../../assets/whatsapp-icon.png"
// import btnImg from "../../assets/hireme.png";
// import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Dr. Subha</span>
          <br />
          Fashion Designer &
          <br />
          Boutique Owner
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br />{" "}
          visually appealing and user friendly websites.
        </p>

        <a href="https://wa.me/919400076226">
          <button className="btn">
            <img src={whatsapp_icon} alt="whatsapp_icon" className="wa_icon btn_content" />
            <p className="btn_content">Contact now</p>
          </button>
        </a>

        {/* <Link>
          <a href="https://wa.me/919400076226">
            <button className="btn">
              <img src={btnImg} alt="Hire me" className="btnImg" />
              Hire me
            </button>
          </a>
        </Link> */}

      </div>
      <img className="bg" src={bg} alt="profile" />{" "}
    </section>
  );
};

export default Intro;
