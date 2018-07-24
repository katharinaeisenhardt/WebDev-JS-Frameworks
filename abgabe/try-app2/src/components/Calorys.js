import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchCalorys } from '../actions/CaloryActions';

class Calories extends Component {
  componentWillMount() {
    this.props.fetchCalorys();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newCalory) {
      this.props.Calories.push(nextProps.newCalory);
    }
  }

  render() {
    const caloryItems = this.props.Calories.map(Calory => (
      <div key={Calory.id}>
        <h3>{Calory.foodName}</h3>
        <p>{Calory.calories}</p>
        <button onClick={(e) => {
          e.preventDefault();
          this.props.deleteCalory(Calory.id);
        }}>Delete calories entry</button><Link to={`/Calory/${Calory.id}`} >Update calories</Link>
      </div>
    ));
    return (
      <div>
        <h1>Calories</h1>
        {caloryItems}
      </div>
    );
  }
}

Calories.propTypes = {
  fetchCalorys: PropTypes.func.isRequired,
  Calories: PropTypes.array.isRequired,
  newCalory: PropTypes.object
};

const mapStateToProps = state => ({
  Calories: state.Calories.items,
  newCalory: state.Calories.item
});

export default withRouter(connect(mapStateToProps, { fetchCalorys })(Calories));