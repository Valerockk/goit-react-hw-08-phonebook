import axios from "axios";
import {
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
} from "./auth-actions";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);

    token.set(response.data.token);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error));

    if (error.response.status === 400) {
      toast.error("User creation error! Please try again!");
    } else if (error.response.status === 500) {
      toast.error("Oops! Server error! Please try later!");
    } else {
      toast.error("Something went wrong!");
    }
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);

    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error));
    toast.error("Invalid email or password! Try again!");
  }
};

const logOut = () => async (dispatch) => {
  dispatch(logoutRequest());

  try {
    await axios.post("/users/logout");

    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error));

    if (error.response.status === 500) {
      toast.error("Oops! Server error! Please try later!");
    } else {
      toast.error("Something went wrong! Please reload the page!");
    }
  }
};

const getUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(getUserRequest());

  try {
    const response = await axios.get("/users/current");

    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserError(error));
    token.unset();
    toast.warn("Authorization timed out! Please authenticate again!");
  }
};

export { register, logIn, logOut, getUser };
