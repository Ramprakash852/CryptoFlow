import React from "react";

const Hero = ({ transferNativeToken }) => {
  return (
    <section
      data-settings="particles-1"
      className="main-section crumina-flying-balls particles-js bg-1"
    >
      <div className="container">
        <div className="row medium-padding120 align-center">
          <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Coin Market</div>
              <h2 className="heading-title heading--half-colored">
                Created Liqudity Marketplace
              </h2>
              <div className="heading-text">
              A crypto Flow is an online platform for buying,
                  selling, and trading cryptocurrencies like Bitcoin and
                  Ethereum. It functions as an exchange, offering services such
                  as spot trading, futures trading, and staking.These platforms
                  provide secure wallets, transaction tracking, and market
                  analysis tools, with encryption and two-factor authentication
                  ensuring security.
              </div>
            </header>

            <a
              onClick={() => transferNativeToken()}
              // href="#buyWoox"
              className="btn btn--large btn--primary btn--transparent"
            >
              Get Woox Token Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
