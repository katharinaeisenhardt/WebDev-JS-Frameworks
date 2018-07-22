import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
//Component
import { updateCalory, getCalory } from '../actions/Caloryactions';


class UpdateCalory extends Component {

  constructor(props){
    super(props);
    this.state = {
        foodName: 'Pizza-Pasta-Burger',
        calories: '1000-500-1200',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    let id = this.props.match.params.caloryid
    console.log(id);
    this.props.getCalory(id);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.singleCalory){
      this.setState(nextProps.singleCalory)
      console.log("..willRecieveProps state: ",this.state)
      console.log("..willRecieveProps nextProps.singlePost: ",nextProps.singleCalory)
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const calory = {
      id: this.state.id,
      foodName: this.state.foodName,
      calories: this.state.calories,
    };
    this.props.updateCalory(calory);
    this.props.history.push("/");
  }

  render(){
    return(
      <div className="App">
        <h1>Update Calories</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Food: </label><br />
            <input type="text" name='foodName' onChange={this.onChange} value={this.state.foodName}/>
          </div>
          <div>
            <label>Calories: </label><br />
            <input type="text" name='calories' onChange={this.onChange} value={this.state.calories}/>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  console.log("in mapStateToProps: ", reduxState.calorys.item)
  return ({
    // workouts ist der Reducer!
    // reduxState der Parameter der Arrow-Function
    singleCalory: reduxState.calorys.item
  })
}

export default withRouter(connect(mapStateToProps, { getCalory, updateCalory })(updateCalory));