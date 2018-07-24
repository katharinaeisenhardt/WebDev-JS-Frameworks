import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCalory } from '../actions/CaloryActions';

class CaloryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: '',
      calories: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const Calory = {
      foodName: this.state.foodName,
      calories: this.state.calories
    };

    this.props.createCalory(Calory);
  }

  render() {
    return (
      <div>
        <h1>Add Calories</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Food: </label>
            <br />
            <input
              type="text"
              name="foodName"
              onChange={this.onChange}
              value={this.state.foodName}
            />
          </div>
          <br />
          <div>
            <label>Calories: </label>
            <br />
            <input
              type="text"
              name="calories"
              onChange={this.onChange}
              value={this.state.calories}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

CaloryForm.propTypes = {
  createCalory: PropTypes.func.isRequired
};

export default withRouter(connect(null, { createCalory })(CaloryForm));