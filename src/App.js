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
        <>
          <Header />
          <h1>Привіт</h1>
        </>
      )}
    </div>
  );
}

export default App;
