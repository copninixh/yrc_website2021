import React from "react";

export default function Opendata(props) {
  const { data } = props;
  return (
    <div className="col-xl-3 col-md-3 col-sm-6 col-xs-6 mb-3">
      <div className="card" style={{ width: "" }}>
        <a href={data.link}>
          <div
            className="card-img-top"
            style={{
              backgroundColor: "#EF4982",
              borderRadius: "14px 14px 0px 0px",
            }}
          >
            <p align="center">
              <img src={data.img} width="50%" className="img-fluid pt-5 pb-5" />
            </p>
          </div>
          <div className="card-body " style={{ height: "107px" }}>
            <h5 align="center" style={{ color: "#42495b" }}>
              {data.title}
            </h5>
          </div>
        </a>
      </div>
    </div>
  );
}
