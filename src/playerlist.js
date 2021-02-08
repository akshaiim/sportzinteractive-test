import React from "react";
import "./App.css";

export default function playerlist({ item, match }) {
  const { PFName, SkillDesc, Value, Id } = item;
  

  const MDate = match.map((item) => item.MDate);
  const CCode = match.map((item) => item.CCode);
  const VsCCode = match.map((item) => item.VsCCode);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <img
              className="card-img-top"
              src={window.location.origin + `/images/${Id}.jpg`}
              alt={`${Id}.jpg`}
            />
            <div className="card-body">
              <h4 className="card-title">Player Name : {PFName}</h4>
              <h6 className="card-subtitle mb-2 ">skill: {SkillDesc}</h6>
              <p className="card-text">value : ${Value}</p>
              <p className="card-text">Next Match date : {MDate}</p>
              <p className="card-text">
                Match : {CCode} vs {VsCCode}
              </p>

              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
