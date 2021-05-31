import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Staff from './pages/Staff';
import Reservation from './pages/Reservation';
import Search from './pages/Search';
import Order from './pages/Order';
import Aplikimet from './pages/Aplikimet';

function App() {
  return <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/about" exact component={About}/>
          <Route path="/staff" exact component={Staff}/>
          <Route path="/aplikimet" exact component={Aplikimet}/>
          <Route path="/reservation" exact component={Reservation}/>
          <Route path="/Order" exact component={Order}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </div>;
}

export default App;