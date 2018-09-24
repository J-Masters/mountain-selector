import React, { Component } from 'react';
import { connect } from 'react-redux';
import MountainListItem from '../components/MountainListItem';
import { fetchMountains } from '../actions';

class MountainList extends Component {
  componentDidMount() {
    this.props.fetchMountains();
  }

  renderMountainsList() {
    let maxScore = 0;
    const rankedMountains = this.props.mountains.map(mountain => {
      let totalScore = 0;
      for (let score in this.props.rankings) {
        totalScore +=
          parseInt(this.props.rankings[score], 10) * mountain[score];
      }
      mountain.totalScore = totalScore;
      if (totalScore > maxScore) {
        maxScore = totalScore;
      }

      return mountain;
    });

    rankedMountains.sort((a, b) => {
      return a.totalScore > b.totalScore
        ? -1
        : a.totalScore < b.totalScore
          ? 1
          : 0;
    });

    return rankedMountains.map(mountain => {
      return (
        <MountainListItem
          mountain={mountain}
          key={mountain.name}
          maxScore={maxScore}
        />
      );
    });
  }

  render() {
    return <div className="mountains-list">{this.renderMountainsList()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    mountains: state.mountains,
    rankings: state.rankings
  };
}

export default connect(
  mapStateToProps,
  { fetchMountains }
)(MountainList);
