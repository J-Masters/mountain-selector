import React from 'react';

const MountainListItem = ({ mountain }) => {
  return (
    <div className="card hoverable" key={mountain._id}>
      <div className="card-content">
        <span className="card-title">{mountain.name}</span>
        <div className="row">
          <div className="col s2 center-align info-block">
            Annual Snowfall
            <br />
            {mountain.annualSnowfall} in
          </div>
          <div className="col s2 center-align info-block">
            Acreage
            <br />
            {mountain.acreage} acres
          </div>
          <div className="col s2 center-align info-block">
            Vertical
            <br />
            {mountain.vertical} ft
          </div>
          <div className="col s2 center-align info-block">
            Beginner Terrain
            <br />
            {mountain.beginnerPercent}%
          </div>
          <div className="col s2 center-align info-block">
            Intermediate Terrain
            <br />
            {mountain.intermediatePercent}%
          </div>
          <div className="col s2 center-align info-block">
            Expert Terrain
            <br />
            {mountain.expertPercent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default MountainListItem;