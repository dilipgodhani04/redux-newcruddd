import { ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER } from "./Constant";
// import * as types from "./Constant";
export const addUser = (data) => {
  
  return {
    type: ADD_USER,
    payload: data,
  };
};

export const deletUser = (id) => {

  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const editUser = (id) => {
 
  return {
    type: EDIT_USER,
    payload: id,
  };
};

export const updateUser = (data) => {
  console.log(data, "dattta");
  return {
    type: UPDATE_USER,
    payload: data,
  };
};
