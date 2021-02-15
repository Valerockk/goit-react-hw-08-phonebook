import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from "../../redux/auth";
import style from "./AppBar.module.css";

export default function Appbar() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={style.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
