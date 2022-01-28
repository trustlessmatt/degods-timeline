import logo from "./degods.png";
import "./App.css";
import Card from "./components/UI/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="py-2 text-2xl font-bold">
          The DeGods Experiment Timeline is here.<br></br>
          Understand our history to see into our future.
        </p>
      </header>
      <body>
          <Card>DeGods Founded: 9/27/21</Card>
          <Card>Big Step 2</Card>
          <Card>Big Step 3</Card>
      </body>
      <footer className="">
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
