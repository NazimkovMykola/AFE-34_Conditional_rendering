import { useState } from "react";
import "./App.css";
import FormLogin from "./components/formLogin/FormLogin";
import Header from "./components/header/Header";
import isLoginState from "./mobX/isLoginState";
import { observer } from "mobx-react";
import UserState from "./mobX/userState";

const  App  = observer(() => {
  const [isShowForm, setIsShowForm] = useState(false)
  return (
    <div className="App">
      {isShowForm && <FormLogin openForm={setIsShowForm} />}
      <div className="mainScreen">
        <Header openForm={setIsShowForm} />
        <main className="mainScreen__content">
          <h1>{isLoginState.isLogin ? `Привіт ${UserState.userData.name}` : "Привіт, гість!"}</h1>
          {isLoginState.isLogin && (
            <p>
              Прихований контент якій має бачити лише залогінений користувач
            </p>
          )}
        </main>
      </div>
    </div>
  )
})

export default App;
