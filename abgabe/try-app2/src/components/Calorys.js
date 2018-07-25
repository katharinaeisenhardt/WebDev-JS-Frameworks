import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchCalorys, deleteCalory } from '../actions/CaloryActions';


class Calories extends Component {
  componentWillMount() {
    this.props.fetchCalorys();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newCalory) {
      this.props.calories.push(nextProps.newCalory);
    }
    if(nextProps.updatedCalory){
      this.props.calories.push(nextProps.updatedCalory);
    }
    if(nextProps.deletedCalory){
      this.props.calories.splice(nextProps.deletedCalory);
    }
  }

  render() {
    const caloryItems = this.props.calories.map(calory => (
      <div key={calory.id}>
        <h3>{calory.foodName}</h3>
        <p>{calory.calories}</p>
        <button onClick={(e) => {
          e.preventDefault();
          this.props.deleteCalory(calory.id);
          window.location.reload()
        }}>Delete calories entry</button><br/><Link to={`/Calory/${calory.id}`} >Update calories</Link>
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
  calories: PropTypes.array.isRequired,
  newCalory: PropTypes.object,
  updatetCalory: PropTypes.object,
  deletedCalory: PropTypes.object
};

const mapStateToProps = state => ({
  calories: state.Calories.items,
  newCalory: state.Calories.item,
  updatetCalory: state.Calories.item,
  deletedCalory: state.Calories.item
});

export default withRouter(connect(mapStateToProps, { fetchCalorys, deleteCalory })(Calories));