import React from "react";
import {
  TiSocialPinterestCircular,
  TiSocialYoutube,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialFacebook,
} from "react-icons/ti";

import { FooterICON } from "./index";

const Footer = () => {
  const social = [
    {
      link: "#",
      name: "Facebook",
      icon: <TiSocialFacebook />,
    },
    {
      link: "#",
      name: "Twitter",
      icon: <TiSocialTwitter />,
    },
    {
      link: "#",
      name: "YouTube",
      icon: <TiSocialYoutube />,
    },
    {
      link: "#",
      name: "Pintrest",
      icon: <TiSocialPinterestCircular />,
    },
    {
      link: "#",
      name: "Instagram",
      icon: <TiSocialInstagram />,
    },
  ];
  return (
    <footer className="footer" id="site-footer">
      <canvas id="can"></canvas>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <div className="widget w-info">
              <a href="/" className="site-logo">
                <img src="img/logo-primary.png" alt="" />
                <FooterICON />
              </a>
              <p>
                A crypto Flow is an online platform for buying, selling, and
                trading cryptocurrencies like Bitcoin and Ethereum. It functions
                as an exchange, offering services such as spot trading, futures
                trading, and staking.These platforms provide secure wallets,
                transaction tracking, and market analysis tools, with encryption
                and two-factor authentication ensuring security.
              </p>
            </div>

            <div className="widget w-contacts">
              <ul className="socials socials--white">
                {social.map((social, index) => (
                  <li key={index} className="social-item">
                    <a href={social.link} className="woox-icon">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-sm-offset-0 col-xs-12">
              <span>@ All right reserved 2024</span>
              <span>
                <a href="/">The Woox</a> - ICO and Cryptocurrency web3
              </span>

              <div className="logo-design">
                <img src="img/logo-fire.png" alt="" />

                <div className="design-wrap">
                  <div className="sup-title">Design By</div>
                  <a
                    href="chitti852852@gmail.com"
                    className="logo-title"
                  >
                    @Ramprakash
                  </a>
                </div>
              </div>

              <div className="logo-design logo-design-crumina">
                <img src="img/crumina-logo.png" alt="" />
                <div className="design-wrap">
                  <div className="sup-title">Design By</div>
                  <a
                    href="https://www.linkedin.com/in/bhukya-ramprakash-2774b428b/"
                    className="logo-title"
                  >
                    Bhukya Ramprakash
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="back-to-top">
        <svg className="woox-icon icon-top-arrow">
          <use xlinkHref="#icon-top-arrow"></use>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
