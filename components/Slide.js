import React, { Component } from "react";

export default class Slide extends Component {
  render() {
    return (
      <>
             {/*Start sldie and director*/}
             <div className="container-fluid bg-director mt-4">
                <div className="container">
                  <div className="row">
                      <div className="col-xl-8 col-lg-7 mt-5 mb-5 text-center">
                      <div id="carouselExampleControls" className="carousel slide mt-lg-5" data-ride="carousel">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img className="d-block w-100 radius-banner" src="/images/regis.jpg" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100 radius-banner" src="/images/soldier.jpg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100 radius-banner" src="/images/teacher63.jpg" alt="Third slide" />
                            </div>
                          </div>
                          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                          </a>
                          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                          </a>
                        </div>

                      </div>
                      <div className="col-xl-4 col-lg-5 mt-5">
                            <br className="d-none d-xl-block d-lg-block"/>
                            <br className="d-none d-xl-block d-lg-block"/>
                            <br className="d-none d-xl-block d-lg-block"/>
                            <br/>
                            <br/>
                            
                            <div className="container mt-4 mb-5" style={{backgroundColor: "#FFFFFF",borderRadius: "15px",boxShadow: "3px 10px 20px #00000029",paddingBottom: "50px",}} align="center">
                                <img src="/img/director.jpg" className="img-fluid rounded-circle" width="60%" style={{ border: "5px solid #C81451",marginTop: "-135px" }}/>
                                <h2 style={{fontWeight: "600",fontSize: "25px",color: "#EF4982",}} className="mt-3 fw-600">
                                    นายทีปชัย วงษ์วรศรีโรจน์
                                </h2>
                                <h3 style={{ fontWeight: "500", fontSize: "18px" }}>
                                    ผู้อำนวยการโรงเรียนยุพราชวิทยาลัย
                                </h3>
                            </div>
                      </div>
                      
                  </div>
                </div>
         
              </div>
      </>
    );
  }
}
