import { createAction } from "@reduxjs/toolkit";
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from "./auth-types";

const registerRequest = createAction(REGISTER_REQUEST);
const registerSuccess = createAction(REGISTER_SUCCESS);
const registerError = createAction(REGISTER_ERROR);

const loginRequest = createAction(LOGIN_REQUEST);
const loginSuccess = createAction(LOGIN_SUCCESS);
const loginError = createAction(LOGIN_ERROR);

const logoutRequest = createAction(LOGOUT_REQUEST);
const logoutSuccess = createAction(LOGOUT_SUCCESS);
const logoutError = createAction(LOGOUT_ERROR);

const getUserRequest = createAction(GET_USER_REQUEST);
const getUserSuccess = createAction(GET_USER_SUCCESS);
const getUserError = createAction(GET_USER_ERROR);

export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getUserRequest,
  getUserSuccess,
  getUserError,
};
