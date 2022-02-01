import "./App.css";
import Header from "./components/UI/Header";
import EventsList from "./components/Events/EventsList";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p className="py-5 text-3xl font-bold">
          The DeGods Experiment Timeline<br></br>
        </p>
        {/* spinning icon was here */}
        <p className="py-2 text-sm">
          History of DeGods, as written by DeGods.
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
