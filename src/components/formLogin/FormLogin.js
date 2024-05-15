import { useRef } from "react";
import "./FormLogin.css";

const FormLogin = () => {
  const spinner = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onOutsideClick = (e) => {
    if (e.target.id === "modalBackground") {
      console.log("outside click");
    }
  };
  const loginRequest = (e) => {
    spinner.current.style.opacity = 1;
    e.target.disabled = true;
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        spinner.current.style.opacity = 0;
        e.target.disabled = false;
      });
  };

  return (
    <div
    id="modalBackground"
    onClick={onOutsideClick}
    className="modalBackground"
  >
    <form onSubmit={onSubmit}>
      <h2>Для роботи з застосунком необхідно залогінитись</h2>
      <label>
        Логін
        <input
          type="text"
          name="login"
          id="login"
          placeholder="Введіть логін"
        />
      </label>
      <label>
        Пароль
        <input
          type="text"
          name="pass"
          id="pass"
          placeholder="Введіть пароль"
        />
      </label>
      <button onClick={loginRequest} className="btn btn-primary" type="button">
        <span role="status">Увійти</span>
        <span
          ref={spinner}
          className="spinner-border spinner-border-sm"
        ></span>
      </button>
    </form>
  </div>
  )

};

export default FormLogin;
