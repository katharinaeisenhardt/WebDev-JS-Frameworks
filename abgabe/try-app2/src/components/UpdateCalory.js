import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateCalory, getCalory } from '../actions/CaloryActions';


class UpdateCalory extends Component {

  constructor(props){
    super(props);
    this.state = {
      foodName: 'Pizza-Pasta-Burger',
      calories: 'a hell of a lot',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount(){
    let id = this.props.match.params.caloryid
    this.props.getCalory(id);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.singleCalory){
      this.setState(nextProps.singleCalory)
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();

    const Calory = {
      id: this.state.id,
      foodName: this.state.foodName,
      calories: this.state.calories,
    };
    this.props.updateCalory(Calory);
    this.props.history.push("/");
  }

  render(){
    return(
      <div className="Update">
        <h3>Update calories</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Food:</label><br />
            <input type="text" name="foodName" onChange={this.onChange} value={this.state.foodName} />
          </div>
          <div>
            <label>Calories:</label><br />
            <input type="text" name="calories" onChange={this.onChange} value={this.state.calories} />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return ({
    singleCalory: reduxState.Calories.item
  })
}

export default withRouter( connect (mapStateToProps, { getCalory, updateCalory })(UpdateCalory));
