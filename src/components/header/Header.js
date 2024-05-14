import "./Header.css";
import UserProfile from '../userProfile/UserProfile'
const Header = () => {
  return <header>
    <a className="header__logo" href="/">Logo</a>
    <UserProfile/>
    <div className="header_button-login">Увійти</div>
  </header>;
};

export default Header;
