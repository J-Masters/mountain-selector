import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMountains } from '../actions';

class MountainList extends Component {
  componentDidMount() {
    this.props.fetchMountains();
  }

  renderMountains() {
    return this.props.mountains.map(mountain => {
      return (
        <div className="card hoverable" key={mountain._id}>
          <div className="card-content">
            <span className="card-title">{mountain.name}</span>
            <p>{mountain.annualSnowfall}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <h5>MountainsList</h5>
        {this.renderMountains()}
      </div>
    );
  }
}

function mapStateToProps({ mountains }) {
  return { mountains };
}

export default connect(mapStateToProps, { fetchMountains })(MountainList);