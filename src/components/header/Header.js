import "./Header.css";
import UserProfile from "../userProfile/UserProfile";
import isLoginState from "../../mobX/isLoginState";
import { observer } from "mobx-react";

const Header = observer((props) => {
  const {openForm} = props
  return (
    <header>
      <a className=" animated-button" href="/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Крутий логотип
      </a>
      {isLoginState.isLogin ? (
        <UserProfile />
      ) : (
        <div
          onClick={() => {
            openForm(true)
          }}
          className="header__button-login"
        >
          Увійти
        </div>
      )}
    </header>
  )
});

export default Header;
