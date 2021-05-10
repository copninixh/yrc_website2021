import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <header className="site-header-two site-header-two__home-four">
          <nav
            className="main-nav__two stricky fixed-top"
            style={{ backgroundColor: "white", color: "black", height: "65px" }}
          >
            <div className="container-fluid" style={{ height: "65px" }}>
              <div className="main-nav__logo-box mt-1">
                <a
                  href="index.html"
                  className="f-pink"
                  style={{ fontSize: "20px", fontWeight: "600" }}
                >
                  โรงเรียนยุพราชวิทยาลัย
                  <br />
                  <small
                    className="text-dark"
                    style={{
                      fontWeight: "600",
                      marginTop: "-7px",
                      display: "block",
                    }}
                  >
                    Yupparaj Wittayalai School{" "}
                  </small>
                </a>
              </div>
              {/* /.main-nav__logo-box */}
              <div className="center-logo">
                <a href="index.html">
                  <img
                    src="/img/logo.png"
                    className="img-fluid d-none d-xl-block d-lg-block d-md-block"
                    alt
                  />
                </a>
              </div>

              <div className="main-nav__main-navigation">
                <ul className=" main-nav__navigation-box">
                  <li className="current">
                    <a href="index.html" className="s1 item1">
                      หน้าหลัก
                    </a>
                  </li>

                  <li className="dropdown">
                    <a href="services-1.html" className="item2">
                      เกี่ยวกับโรงเรียน
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="services-1.html">Services 01</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="portfolio-standard.html" className="item3">
                      YRC E-Service
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="portfolio-standard.html">Portfolio Standard</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                  <li className="dropdown">
                    <a href="portfolio-standard.html" className="item4">
                      YRC E-Learning
                      <button className="dropdown-btn">
                        <i className="fa fa-angle-right" />
                      </button>
                    </a>
                    <ul>
                      <li>
                        <a href="portfolio-standard.html">Portfolio Standard</a>
                      </li>
                    </ul>
                    {/* /.sub-menu */}
                  </li>
                </ul>
              </div>
              {/* /.main-nav__main-navigation */}
              <div className="main-nav__right" style={{ color: "dark" }}>
                <a
                  href="#"
                  className="side-menu__toggler"
                  style={{ color: "dark" }}
                >
                  <span></span>
                </a>
              </div>
              {/* /.main-nav__right */}
            </div>
            {/* /.container-fluid */}
          </nav>
        </header>
      </>
    );
  }
}
