import logo from "./logo.svg";
import "./App.css";
import Enter from "./components/Enter.js";
import JournalEntry from "./components/Entry";

function App() {
  const title = "Journal";
  const sub = "new entry:";
  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
        <p>{sub}</p>
        <Enter />
        <JournalEntry />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
