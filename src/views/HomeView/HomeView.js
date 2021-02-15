import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import style from "./HomeView.module.css";

const HomeView = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Best contact storage app.</h1>

      {!isLoggedIn && (
        <p className={style.info}>
          Please, <b>Sign up</b> or <b>Log in</b> to have access to the
          Phonebook!
        </p>
      )}
    </div>
  );
};

export default HomeView;
