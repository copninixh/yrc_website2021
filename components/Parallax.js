import React, { Component } from "react";

export default class Parallax extends Component {
  render() {
    return (
      <div>
        <div className="parallax">
          <div className="container pt-5 pb-5">
            <h2
              align="center"
              className="pb-4d mb-4"
              style={{ borderBottom: "2px solid" }}
            >
              ข้าไม่ต้องการตำราเรียนที่เดินได้ <br /> ที่ข้าอยากได้นั้น
              คือเยาวชนที่เป็นสุภาพบุรุษ <br />
              ซื่อสัตย์ สุจริต มีอุปนิสัยใจคอดี
            </h2>

            <p align="center" style={{ fontSize: "20px" }}>
              พระบรมราโชบายของพระบาทสมเด็จพระมงกุฎเกล้าเจ้าอยู่หัว
              พระผู้พระราชทานนามโรงเรียนยุพราชวิทยาลัย
            </p>
          </div>
        </div>
      </div>
    );
  }
}
