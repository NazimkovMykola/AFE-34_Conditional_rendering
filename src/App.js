import "./App.css";
import FormLogin from "./components/formLogin/FormLogin";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div className="App">
      {isShowForm ? (
        <FormLogin />
      ) : (
        <div className="mainScreen">
          <Header />
          <main className="mainScreen__content">
          <h1 onClick={()=> setIsShowForm(true)}>Привіт, undefinded</h1>
          <p>Прихований контент якій має бачити лише залогінений користувач</p>
          </main>
        </div>
      )}
    </div>
  );
}

export default App;
