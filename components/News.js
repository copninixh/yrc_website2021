import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <>
            {/*Start News*/}
        <div className="container-fluid mt-5">
          <div className="container">
            <h3 class="f-pink text-center">ข่าวประชาสัมพันธ์ โรงเรียนยุพราชวิทยาลัย</h3>
            <h4 class="text-center">สามารถติดตามข่าวสารการประชาสัมพันธ์ต่างๆ ของโรงเรียนได้ที่นี่</h4>
            
            <ul className="nav nav-pills nav-fill mb-3 mt-3 justify-content-center" id="pills-tab" role="tablist" align="center">
              <li className="nav-item">
                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fas fa-user-graduate"></i> ข่าวประชาสัมพันธ์นักเรียน</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fas fa-chalkboard-teacher"></i> ข่าวประชาสัมพันธ์คณะครู</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fas fa-coins"></i> ข่าวการจัดซื้อ-จัดจ้าง</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact2" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="fas fa-briefcase"></i> ข่าวการรับสมัครงาน-ทั่วไป</a>
              </li>
            </ul>
            <hr/>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3 col-md-2 ">
                            <img src="/images/board.png" className="img-fluid text-center" />
                          </div>
                          <div className="col-xl-9 col-md-10">
                            <h5 className="card-title fw-800 f-pink">ตารางเรียน ภาคเรียนที่ 2 ปีการศึกษา 2563 [แก้ไข 30 พฤศจิกายน 2563]</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3 col-md-2">
                            <img src="/images/board.png" className="img-fluid text-center" />
                          </div>
                          <div className="col-xl-9 col-md-10">
                            <h5 className="card-title fw-800 f-pink">ตารางเรียน ภาคเรียนที่ 2 ปีการศึกษา 2563 [แก้ไข 30 พฤศจิกายน 2563]</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3 col-md-2">
                            <img src="/images/board.png" className="img-fluid text-center" />
                          </div>
                          <div className="col-xl-9 col-md-10">
                            <h5 className="card-title fw-800 f-pink">ตารางเรียน ภาคเรียนที่ 2 ปีการศึกษา 2563 [แก้ไข 30 พฤศจิกายน 2563]</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3 col-md-2">
                            <img src="/images/board.png" className="img-fluid text-center" />
                          </div>
                          <div className="col-xl-9 col-md-10">
                            <h5 className="card-title fw-800 f-pink">ตารางเรียน ภาคเรียนที่ 2 ปีการศึกษา 2563 [แก้ไข 30 พฤศจิกายน 2563]</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 

                </div>

              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                <div className="row">
                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/education.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/education.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/education.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/education.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 

                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="row">
                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">แต่งตั้งบุคลากรปฏิบัติหน้าที่ตามโครงสร้างการบริหารงานโรงเรียนยุพราชวิทยาลัย ปีการศึกษา 2562</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 

                </div>
              </div>
              <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab">
                <div className="row">
                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">รับสมัครลูกจ้างชั่วคราว ตำแหน่งพนักงานขับรถ</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">รับสมัครลูกจ้างชั่วคราว ตำแหน่งพนักงานขับรถ</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">รับสมัครลูกจ้างชั่วคราว ตำแหน่งพนักงานขับรถ</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 mb-2">
                    <div className="shadow none-border">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-xl-3">
                            <img src="/images/raj.png" className="img-fluid" />
                          </div>
                          <div className="col-xl-9">
                            <h5 className="card-title fw-800 f-pink">รับสมัครลูกจ้างชั่วคราว ตำแหน่งพนักงานขับรถ</h5>
                            <a href="$" className="thm-btn">อ่านต่อ <i className="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                 

                </div>
              </div>
            </div>
            <p className="text-center mt-3"><a href="" className="btn btn-yrc radius-button fw-600">ดูทั้งหมด <i className="fa fa-angle-double-right"></i></a></p>
            
          </div>


      </div>

      </>
    );
  }
}
