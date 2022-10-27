import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./dictionary-logo.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="img-fluid logo " />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Mariia Zvoryhina</footer>
      </div>
    </div>
  );
}
