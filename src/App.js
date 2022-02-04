import "./App.css";
import Header from "./components/UI/Header";
import EventsList from "./components/Events/EventsList";
import logo from "./components/Assets/degods.png";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="my-5 mx-10 xl:mx-96 md:mx-60 sm:mx-30">
        <div className="flex justify-center">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="py-5 text-4xl font-bold">
          The DeGods Experiment Timeline<br></br>
        </p>
        {/* spinning icon was here */}
        <p className="italic py-4 text-md">
          Formed from the dust of stars in the molten core of Mount Solympus,
          the DeGods arose... In time, all shall burn; for we are dust and to
          $DUST we shall return.
        </p>
        <p className="text-sm py-3">
          Each event below contains a clickable link archiving a DeGods moment
          in time either on Twitter or Discord. Website created with ❤️ by
          @web3_degen with colorful summaries written by{" "}
          <a href="https://twitter.com/web3_degen">@web3_degen</a>,{" "}
          <a href="https://twitter.com/kindafungible">@kindafungible</a>, and{" "}
          <a href="https://twitter.com/Beanthatgotaway">@Beanthatgotaway</a>.
          <br></br>
        </p>
      </header>
      <body>
        <EventsList />
      </body>
      <footer className="py-8">
        <a
          className="text-sm"
          href="https://www.degods.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-lg text-white bg-degods-purp px-5 py-3">Visit DeGods</button>
        </a>
      </footer>
    </div>
  );
}

export default App;
