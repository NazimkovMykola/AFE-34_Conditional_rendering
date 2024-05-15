import "./App.css";
import FormLogin from "./components/formLogin/FormLogin";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <FormLogin />
      <div className="mainScreen">
        <Header />
        <main className="mainScreen__content">
          <h1>Привіт, undefinded</h1>
          <p>Прихований контент якій має бачити лише залогінений користувач</p>
        </main>
      </div>
    </div>
  );
}

export default App;
