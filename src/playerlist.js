import React from "react";
import "./App.css"

export default function playerlist({ item, match }) {
  const { PFName, SkillDesc, Value, Id } = item;

  const MDate = match.map((item) => item.MDate);
  const CCode = match.map((item) => item.CCode);
  const VsCCode = match.map((item) => item.VsCCode);

  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <img
              class="card-img-top"
              src={window.location.origin + `/images/${Id}.jpg`}
              alt={`${Id}.jpg`}
            />
            <div class="card-body">
              <h4 class="card-title">Player Name : {PFName}</h4>
              <h6 class="card-subtitle mb-2 ">skill: {SkillDesc}</h6>
              <p class="card-text">value : ${Value}</p>
              <p class="card-text">Next Match date : {MDate}</p>
              <p class="card-text">
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
