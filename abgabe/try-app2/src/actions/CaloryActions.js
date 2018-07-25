import { FETCH_CALORYS, NEW_CALORY, GET_CALORY, UPDATE_CALORY, DELETE_CALORY } from './ActionTypes';
import { request } from 'graphql-request';

export const fetchCalorys = () => dispatch => {
    const gcEndPoint = `https://api.graph.cool/simple/v1/cjk04i8xn03ti0167r7bur52q`
    const gcQuery = `query {allCalories {id foodName calories}}`
    request (gcEndPoint, gcQuery)
      .then(Calories =>
        dispatch({
          type: FETCH_CALORYS,
          payload: Calories.allCalories
        })
      );
  };
  
export const createCalory = CaloryData => dispatch => {
    const gcEndPoint = `https://api.graph.cool/simple/v1/cjk04i8xn03ti0167r7bur52q`
    const gcQuery = `mutation createNewCalory($foodName: String!, $calories: Int!)
    {  createCalory ( foodName: $foodName, calories: $calories )
        { id foodName calories }
    }`

    const gcVar = {
        "foodName": CaloryData.foodName,
        "calories": CaloryData.calories,
    }
    request (gcEndPoint, gcQuery, gcVar )
    .then(Calory => {
        dispatch({
        type: NEW_CALORY,
        payload: Calory.createCalory
        }) 
    })
};

export const getCalory = id => dispatch => {
    const gcEndPoint = `https://api.graph.cool/simple/v1/cjk04i8xn03ti0167r7bur52q`
    const gcQuery = `query getOneCalory($id: ID!)
    { Calory(id: $id)
    { id foodName calories }
    }`
    const gcVar = {
      "id": id,
    }
    request (gcEndPoint, gcQuery, gcVar)
    .then(Calory => {
      dispatch({
        type: GET_CALORY,
        payload: Calory.Calory
      })
    })
};

export const updateCalory = CaloryData => dispatch => {
    const gcEndPoint = `https://api.graph.cool/simple/v1/cjk04i8xn03ti0167r7bur52q`
    const gcQuery = `mutation updateActCalory($id: ID!, $foodName: String!, $calories: Int!)
    {  updateCalory ( id: $id, foodName: $foodName, calories: $calories )
        { id foodName calories }
    }`

    const gcVar = {
        "id": CaloryData.id,
        "foodName": CaloryData.foodName,
        "calories": CaloryData.calories
    }
    request (gcEndPoint, gcQuery, gcVar )
    .then(Calory => {
        dispatch({
        type: UPDATE_CALORY,
        payload: Calory.updateCalory
        })
    })
};

export const deleteCalory = id => dispatch => {
    const gcEndPoint = `https://api.graph.cool/simple/v1/cjk04i8xn03ti0167r7bur52q`
    const gcQuery = `mutation deleteActCalory($id: ID!)
    {  deleteCalory ( id: $id )
      { id foodName calories }
    }`
    const gcVar = {
      "id": id
    }
    request (gcEndPoint, gcQuery, gcVar )
    .then(Calory => {
      dispatch({
        type: DELETE_CALORY,
        payload: Calory.deleteCalory
      })
    })
  };