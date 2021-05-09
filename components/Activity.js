import React, { Component } from "react";

export default class Activity extends Component {
  render() {
    return (
      <>
             {/*Start Activity*/}
      <div className="container-fluid mt-5">
        <div className="container mb-4">
            <div className="text1 mb-2">
              <div className="test2">
                <h3 class="f-pink text-left">ข่าวกิจกรรม โรงเรียนยุพราชวิทยาลัย</h3>
              </div>
              <div className="line2"></div>
            </div>

            <div className="row">
              {/*Start Card Left*/}
              <div className="col-xl-6 col-lg-6">
                <div className="card border-n">
                  <img className="card-img-top" src="/images/01.jpg" style={{borderRadius:"10px 10px 0px 0px"}} alt />
                  <div className="card-body bg-card">
                    <h4 className="card-title text-light">พิธีประทานเข็มเกียรติคุณให้แก่ฝ่ายบริหารที่เข้ารับตำแหน่งในโรงเรียนยุพราชวิทยาลัย</h4>
                  </div>
                  <div className="card-body bg-yrc" style={{borderRadius:"0px 0px 10px 10px"}}>
                    <div className="col-xl-12">
                      <div className="row">
                        <div className="col-xl-6">
                          <h6 className="card-text text-light">วันที่ 18/08/2563</h6>
                        </div>
                        <div className="col-xl-6">
                          <h6 className="card-text text-light">โดย ฝ่ายประชาสัมพันธ์ของโรงเรียน</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Start Card Right*/}
              <div className="col-xl-6 col-lg-6">
                <div className="row mb-5">
                    <div className="col-xl-5 col-lg-5">
                        <img src="/images/02.jpg" className="img-fluid w-100"></img>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                       <h5 className="f-pink">พิธีสถาปนาตำแหน่งสภานักเรียน - ประธานคณะสี ปีการศึกษา 2563</h5>
                       <label><i class="far fa-clock"></i> 14/08/2563 </label>
                       <a href="#" className="btn btn-success btn-rounded btn-sm">อ่านต่อ</a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-xl-5 col-lg-5">
                        <img src="/images/02.jpg" className="img-fluid w-100"></img>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                       <h5 className="f-pink">พิธีสถาปนาตำแหน่งสภานักเรียน - ประธานคณะสี ปีการศึกษา 2563</h5>
                       <label><i class="far fa-clock"></i> 14/08/2563 </label>
                       <a href="#" className="btn btn-success btn-rounded btn-sm">อ่านต่อ</a>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-xl-5 col-lg-5">
                        <img src="/images/02.jpg" className="img-fluid w-100"></img>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                       <h5 className="f-pink">พิธีสถาปนาตำแหน่งสภานักเรียน - ประธานคณะสี ปีการศึกษา 2563</h5>
                       <label><i class="far fa-clock"></i> 14/08/2563 </label>
                       <a href="#" className="btn btn-success btn-rounded btn-sm">อ่านต่อ</a>
                    </div>
                </div>
              </div>
            </div>
        </div>
  
      </div>
      {/*End Activities*/} 
      </>
    );
  }
}
