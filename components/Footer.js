import React from "react";
import Parallax from "../components/Parallax";

export default function Footer() {
  return (
    <>
      <Parallax />

      <div
        className="col-xl-12 col-md-12 pt-2 pb-2"
        style={{ borderTop: "solid 5px #C81451" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-4 col-12"
              style={{ textAlign: "center", display: "block" }}
            >
              <img
                src="/images/footer.png"
                className="img-fluid pt-3 pb-4"
                width="80%"
              />
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-12 text-xl-left text-md-left text-sm-center text-center">
              <p className="pt-4 text-xl-left text-md-left text-sm-center text-center" style={{ fontWeight: "bold" }}>
                โรงเรียนยุพราชวิทยาลัย <br /> 238 ถนนพระปกเกล้า ตำบลศรีภูมิ
                อำเภอเมือง จังหวัดเชียงใหม่ 50200
              </p>
              <a
                href="https://www.facebook.com/Yupparaj.Wittayalai"
                target="_blank"
                className="btn footer-btn text-center"
              >
               <i class="fab fa-facebook-square"></i>
              </a>
              <a
                href="mailto:yrc@yupparaj.ac.th"
              
                className="btn footer-btn text-center"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="col-xl-12" style={{ backgroundColor: "#C81451" }}>
        <div className="container">
          <p className="pt-3 pb-3" style={{ color: "white",margin:"0px" }}>
            © 2021 Yupparaj Wittayalai School All Right Reserved , Devloper Team
          </p>
        </div>
      </footer>
    </>
  );
}
