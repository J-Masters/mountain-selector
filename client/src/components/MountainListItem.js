import React, { Component } from 'react';
import Chart from 'react-google-charts';
import infoBlockFields from './infoBlockFields';

class MountainListItem extends Component {
  renderGeoChart() {
    const data = [
      ['Mountain', 'Score'],
      [this.props.mountain.name, this.props.mountain.totalScore]
    ];

    const options = {
      displayMode: 'markers',
      region: 'US',
      legend: 'none',
      colorAxis: { colors: ['teal'] }
    };

    return (
      <div className="col">
        <Chart
          chartType="GeoChart"
          width="250px"
          height="100%"
          data={data}
          options={options}
        />
      </div>
    );
  }

  renderInfoBlocks() {
    return infoBlockFields.map(field => {
      return (
        <div
          className="col center-align valign-wrapper hoverable white-text info-block"
          key={field.name}
        >
          {field.label}
          <br />
          {this.props.mountain[field.name]}
          {field.units}
        </div>
      );
    });
  }

  renderDonutChart() {
    const data = [
      ['Level', 'Percent'],
      ['Beginner', this.props.mountain.beginnerScore],
      ['Intermediate', this.props.mountain.intermediateScore],
      ['Expert', this.props.mountain.expertScore]
    ];

    const options = {
      legend: 'none',
      pieHole: 0.4,
      slices: {
        0: { color: 'green' },
        1: { color: 'blue' },
        2: { color: 'black' }
      },
      pieStartAngle: 270,
      chartArea: { width: '100%', height: '100%' },
      fontSize: 15
    };

    return (
      <div className="col">
        <Chart
          chartType="PieChart"
          width="200px"
          height="200px"
          data={data}
          options={options}
        />
      </div>
    );
  }

  render() {
    const percentScore = Math.round(
      (this.props.mountain.totalScore / this.props.maxScore) * 100
    );

    return (
      <div className="card hoverable" key={this.props.mountain.name}>
        <div className="card-content">
          <div className="row">
            <h5 className="col s5 left-align mountain-name">
              {this.props.mountain.name}
            </h5>
            <div className="col s2 offset-s5 right-align mountain-name">
              Total Score
              <br />
              {percentScore}
            </div>
          </div>
          <div className="row mountain-info">
            <div className="col s3">{this.renderGeoChart()}</div>
            <div className="col s6">{this.renderInfoBlocks()}</div>
            <div className="col s3">{this.renderDonutChart()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MountainListItem;
