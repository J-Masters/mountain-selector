import React, { Component } from 'react';
import { connect } from 'react-redux';
import MountainListItem from '../components/MountainListItem';
import { fetchMountains } from '../actions';

class MountainList extends Component {
  componentDidMount() {
    this.props.fetchMountains();
  }

  renderMountainsList() {
    return this.props.mountains.map(mountain => {
      return (
        <MountainListItem mountain={mountain} key={mountain.name} />
      );
    });
  }

  render() {
    return (
      <div className="mountains-list">
        {this.renderMountainsList()}
      </div>
    );
  }
}

function mapStateToProps({ mountains }) {
  return { mountains };
}

export default connect(
  mapStateToProps,
  { fetchMountains }
)(MountainList);
