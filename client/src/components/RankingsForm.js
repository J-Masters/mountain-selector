import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRankings } from '../actions';
import formFields from './formFields';

class RankingsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    formFields.forEach(field => {
      this.state[field.name] = "5";
    });

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    this.props.setRankings(this.state);
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.setRankings(this.state);
  }

  renderRankingsSliders() {
    return formFields.map(ranking => {
      return (
        <div key={ranking.name}>
          <div className="col s4 offset-s1">
            <h6>{ranking.label}</h6>
            <div className="range-field">
              <input
                type="range"
                min="0"
                max="10"
                defaultValue="5"
                name={ranking.name}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div className="col s1" />
        </div>
      );
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="rankings-form row">
        {this.renderRankingsSliders()}
        <div className="center-align">
          <button type="submit" className="btn waves-effect">
            Submit
            <i className="material-icons right">terrain</i>
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { setRankings }
)(RankingsForm);
