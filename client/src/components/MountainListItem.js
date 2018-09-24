import React, { Component } from 'react';
import infoBlockFields from './infoBlockFields';

class MountainListItem extends Component {
  renderInfoBlocks() {
    return infoBlockFields.map(field => {
      return (
        <div className="col center-align valign-wrapper hoverable white-text info-block">
          {field.label}
          <br />
          {this.props.mountain[field.name]}
          {field.units}
        </div>
      );
    });
  }

  render() {
    const percentScore = Math.round(
      (this.props.mountain.totalScore / this.props.maxScore) * 100
    );
    return (
      <div className="card hoverable" key={this.props.mountain.name}>
        <div className="card-content">
          <div className="row">
            <h5 className="col s3 left-align mountain-name">{this.props.mountain.name}</h5>
            <div className="col s2 offset-s7 right-align mountain-name">
              Total Score
              <br />
              {percentScore}
            </div>
          </div>
          <div className="row">{this.renderInfoBlocks()}</div>
        </div>
      </div>
    );
  }
}

export default MountainListItem;
