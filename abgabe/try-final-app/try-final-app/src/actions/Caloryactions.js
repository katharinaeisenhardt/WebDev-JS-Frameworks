import { request } from 'graphql‐request';
import { FETCH_CALORYS, GET_CALORY, NEW_CALORY, REMOVE_CALORY, UPDATE_CALORY } from './Types';
import { CaloryData } from '../data/Data'

//anzeigen
export function fetchCalorys() {
    return function (dispatch) {
        console.log("fetching ...")
        const gcEndPoint = `https://api.graph.cool/simple/v1/cjippx9id2r1f017966wzguk2`
        const gcQuery = `query {allCalorieses {id foodName calories}}`
        request (gcEndPoint, gcQuery )
        .then(calories => {
            dispatch({
                type: FETCH_CALORYS,
                payload: calories.allCalorys
            })
        })
    } 
}; 

//holt sich die Calories
export function getCalory(id) {
    return function (dispatch) {
        console.log("getting ...")
        const gcEndPoint = `https://api.graph.cool/simple/v1/cjippx9id2r1f017966wzguk2`
        const gcQuery = `query {Calories($id: ID!) { Workout(id: $id) {id foodName calories}}}`
        const gcVar = {"id": id,}
        request (gcEndPoint, gcQuery, gcVar )
        .then(calory => {
            dispatch({
                type: GET_CALORY,
                payload: calory.Calory
            })
        })
    } 
};
  
export function createCalory(CaloryData) {
    return function (dispatch) {
        console.log("creating ...")
        const gcEndPoint = `https://api.graph.cool/simple/v1/cjippx9id2r1f017966wzguk2`
        const gcQuery = `mutation {createCalories {id foodName calories}}`
        request (gcEndPoint, gcQuery )
        .then(calory => {
            dispatch({
                type: NEW_CALORY,
                payload: calory.createCalory
            })
        })
    } 
}; 

export function updateCalory(CaloryData) {
    return function (dispatch) {
        console.log("updating ...")
        const gcEndPoint = `https://api.graph.cool/simple/v1/cjippx9id2r1f017966wzguk2`
        const gcQuery = `mutation {updateCalories($id: ID!) {id foodName calories}}`
        const gcVar = {"id": CaloryData.id,}
        request (gcEndPoint, gcQuery, gcVar )
        .then(calory => {
            dispatch({
                type: UPDATE_CALORY,
                payload: calory.updateCalory
            })
        })
    } 
}; 

export function removeCalory(id) {
    return function (dispatch) {
        console.log("removing ...")
        const gcEndPoint = `https://api.graph.cool/simple/v1/cjippx9id2r1f017966wzguk2`
        const gcQuery = `mutation {deleteCalories($id: ID!) {id foodName calories}}`
        const gcVar = {"id": id,}
        request (gcEndPoint, gcQuery, gcVar )
        .then(calory => {
            dispatch({
                type: REMOVE_CALORY,
                payload: calory.removeCalory
            })
        })
    } 
}; 