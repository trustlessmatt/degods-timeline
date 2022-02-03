import "./App.css";
import Header from "./components/UI/Header";
import EventsList from "./components/Events/EventsList";
import logo from "./components/Assets/degods.png";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <div className="flex justify-center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="py-5 text-3xl font-bold">
          The DeGods Experiment Timeline<br></br>
        </p>
        {/* spinning icon was here */}
        <p className="py-2 text-sm italic xl:mx-96 md:mx-60 sm:mx-30">
          Formed from dust of stars in the molten core of Mount Solympus, the
          DeGods arose... In time, all shall burn; for we are dust and to $DUST
          we shall return.
        </p>
        <p className="py-2 mx-10 text-sm xl:mx-96 md:mx-60 sm:mx-30">
          Each event below contains a clickable link archiving a moment
          in time either on Twitter or Discord, with a colorful
          summary, written by @web3_degen, @kindafungible, and @thatbean.
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
