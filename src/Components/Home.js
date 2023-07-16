import React, { Component } from "react";
import logo from "";
// import img1 from "./"

function Home() {

const nav1 = ()=>{

    
}
   

  return (
    <>
      {/* top banner */}
      <div className="top-banner">
        <div className="container">
          <div className="small-bold-text banner-text">
            New to Usabolity Hub : Open and Closed card sorting
          </div>
        </div>
      </div>

      {/* navbar */}
      <nav>
        <div className="container main-nav flex">
          <a href="" className="company-logo">
            <img src="{logo}" alt="company logo" />
          </a>
          <div className="nav-links">
            <ul className="flex">
              <li>
                <a href="#" className="hover-links">
                  Products{" "}
                </a>{" "}
              </li>
              <li>
                <a href="#" className="hover-links">
                  Customer{" "}
                </a>{" "}
              </li>
              <li>
                <a href="#" className="hover-links">
                  Pricing{" "}
                </a>{" "}
              </li>
              <li>
                <a href="#" className="hover-links">
                  Resources{" "}
                </a>{" "}
              </li>
              <li>
                <a href="#" className="hover-links secondary-button">
                  {" "}
                  Sign in
                </a>{" "}
              </li>
              <li>
                <a href="#" className="hover-links primary-button">
                  {" "}
                  Sign up
                </a>{" "}
              </li>
            </ul>
          </div>

          {/* nav 991 */}
          <a href="" className="nav-toggle hover-links" onClick={nav1}><i className="fa-solid fa-bars"></i></a>
        </div>
      </nav>

      <header>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>Design Confidently</h1>
            <p>
              UsabilityHub is a remote user research platform that takes the
              guesswork out of design decisions by validating them with real
              users.
            </p>
            <a href="#" className="primary-button get-started-btn">
              Get Started
            </a>
          </div>

          <div className="header-right">
            <img src="" alt="img" />
          </div>
        </div>
      </header>

      {/* compnies section */}
      <section className="compnies-section>">
        <div className="container">
          <div className="small-bold-text companies-header">
            The world’s best companies rely on UsabilityHub to make better
            design decisions.
          </div>
          <div className="logos flex">
            <img className="logo" src="" alt=""/>
            <img className="logo" src="" alt=""/>
            <img className="logo" src="" alt=""/>
            <img className="logo" src="" alt=""/>
            <img className="logo" src="" alt=""/>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container"></div>
      </section>

      <section className="big-feature-section">
        <div className="container"></div>
      </section>

      <section className="big-feature-section">
        <div className="container"></div>
      </section>

      <section className="big-feature-section">
        <div className="container"></div>
      </section>

      <section className="examples-section">
        <div className="container"></div>
      </section>

      <footer> </footer>

      <div className="sub-footer"></div>
    </>
  );
}
export default Home;
