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
          <Dictionary defaultKeyword="sea" />
        </main>
        <footer className="text-center">
          This project was coded by Mariia Zvoryhina and is{" "}
          <a
            href="https://github.com/MariiaZvoryhina/Dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://earnest-concha-84dd5e.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
