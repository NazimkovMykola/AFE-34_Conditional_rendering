import "./Header.css";
import UserProfile from "../userProfile/UserProfile";

const Header = () => {
  return (
    <header>
      <a className=" animated-button" href="/">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Крутий логотип
      </a>
      <UserProfile />
      <div className="header__button-login">Увійти</div>
    </header>
  );
};

export default Header;
