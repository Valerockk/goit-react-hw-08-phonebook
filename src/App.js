import { lazy, Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import LoaderComponent from "./components/LoaderComponent/LoaderComponent";

import { authOperations } from "./redux/auth";

const HomeView = lazy(() => import("./views/HomeView/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView/LoginView"));
const ContactsView = lazy(() => import("./views/ContactsView/ContactsView"));
const NotFoundView = lazy(() => import("./views/NotFoundView/NotFoundView"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<LoaderComponent />}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3700} position="top-center" />
    </Container>
  );
}

export default App;
