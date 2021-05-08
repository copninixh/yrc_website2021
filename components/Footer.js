import React from "react";
import Parallax from "../components/Parallax";

export default function Footer() {
  return (
    <>
      <Parallax />

      <div
        className="col-xl-12 pt-2 pb-2"
        style={{ borderTop: "solid 5px #C81451" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4"
              style={{ textAlign: "center", display: "block" }}
            >
              <img
                src="/images/footer.png"
                className="img-fluid pt-3 pb-4"
                width="80%"
              />
            </div>
            <div className="col-xl-8">
              <p className="pt-4" style={{ fontWeight: "bold" }}>
                โรงเรียนยุพราชวิทยาลัย <br /> 238 ถนนพระปกเกล้า ตำบลศรีภูมิ
                อำเภอเมือง จังหวัดเชียงใหม่ 50200
              </p>
              <a
                href="https://www.facebook.com/Yupparaj.Wittayalai"
                target="_blank"
                className="footer-btn "
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="col-xl-12" style={{ backgroundColor: "#C81451" }}>
        <div className="container">
          <p className="pt-3 pb-3" style={{ color: "white" }}>
            © 2021 Yupparaj Wittayalai School All Right Reserved , Devloper Team
          </p>
        </div>
      </footer>
    </>
  );
}
