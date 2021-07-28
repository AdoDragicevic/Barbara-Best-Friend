import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Navbar";
import Game from "./Game";
import About from "./About";
import Why from "./Why";
import Room from "./Room";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/about" component={About} />
        <Route exact path="/why" component={Why} />
        <Route exact path="/room" component={Room} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;


/*

game 
  - candidate
  - dont button
  - room button
about

*/