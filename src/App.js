import logo from "./components/Assets/degods.png";
import "./App.css";
import EventsList from "./components/Events/EventsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="py-5 text-3xl font-bold">
          The DeGods Experiment Timeline<br></br>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="py-2 text-sm">
          Understand our history to see into our future.
        </p>
      </header>
      <body>
        <EventsList />
      </body>
      <footer className="py-8">
        <a
          className="text-sm underline"
          href="https://www.degods.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit DeGods.com
        </a>
      </footer>
    </div>
  );
}

export default App;
