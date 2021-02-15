const getIsAuthenticated = (state) => state.auth.isAuthenticated;

const getUserName = (state) => state.auth.user.name;

const getLoading = (state) => state.auth.isLoading;

const getError = (state) => state.auth.error;

export { getIsAuthenticated, getUserName, getLoading, getError };
