import './App.css';
import Footer from './Components/UI/Footer/Footer';
import Navbar from './Components/UI/Navbar/Navbar';
import Home from './Components/Wiews/Home/Home';
import Search from './Components/Wiews/Search/Search';
import Game from './Components/Wiews/Game/Game';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>

        <Route path="/search">
          <Search />
        </Route>

        <Route path="/game/:slug">
          <Game />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
