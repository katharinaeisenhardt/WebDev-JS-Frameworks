import React, { Component } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createCalory} from '../actions/Caloryactions';
import {withRouter} from 'react-router-dom'

class Caloryform extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodName: 'Pizza-Pasta-Burger',
            calories: '1000-500-1200'
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
       e.preventDefault();

       const calory = {
           foodName: this.state.foodName,
           calories: this.state.calories
       };
       this.props.createCalory(calory);
    }

  render() {
    return (
      <div>
        <h1>Add calories</h1>
        <form onSubmit={this.onSubmit} name="addCaloryForm">
            <div>
                <label> Food: </label><br/>
                <input type='text' name='foodName' onChange={this.onChange} value={this.state.foodName}/>
            </div>
            <br/>
            <div>
                <label> Calories: </label><br/>
                <input type='text' name='calories' onChange={this.onChange} value={this.state.calories}/>
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Caloryform.PropTypes = {
    createCalory: PropTypes.func.isRequired
}

export default withRouter(connect(null, {createCalory})(Caloryform));