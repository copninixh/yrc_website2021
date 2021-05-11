import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <>
            {/*Start Banner*/} 
            <div className="container-fluid mt-4">
                <img src="/img/banner.jpg" className="img-fluid w-100 mt-5 radius-banner" style={{zIndex:"0"}} alt />
                {/* <img src="/img/white_banner.jpg" className="img-fluid w-100 white-banner" style={{zIndex:"1" , marginTop:"-577px"}} alt /> */}

                <div className="container-fluid header-yrc mt-4 ">
                  <div className="container my-4">
                    <div className="row mb-3">
                        <div className="col-xl-4 col-md-5">
                          <img src="/img/yup.png" class="img-fluid"></img>
                        </div>
                        <div className="col-xl-8 col-md-6 mt-xl-5  text-center">
                          <h3 className="s1 mt-xl-4 mt-lg-4 mt-5  text-light d-none d-xl-block d-lg-block">โรงเรียนเมืองนครเชียงใหม่ สู่ โรงเรียนยุพราชวิทยาลัย</h3>
                          <h1 className="s1 text-light mb-4 d-none d-xl-block d-lg-block">ก้าวเข้าสู่ ๑๑๖ แห่งการพระราชทานนาม</h1>
                          <h4 className="s1 text-light d-xl-none mt-4 d-lg-none">โรงเรียนเมืองนครเชียงใหม่ สู่ โรงเรียนยุพราชวิทยาลัย</h4>
                          <h4 className="s1 text-light d-xl-none d-lg-none mb-2">ก้าวเข้าสู่ ๑๑๖ แห่งการพระราชทานนาม</h4>
                        </div>
                    </div>
                  </div>
                </div>
              </div>{/* /.col-lg-12 */}
      </>
    );
  }
}