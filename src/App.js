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

function App() {
  return <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
          <Route path="/about" exact component={About}/>
          <Route path="/staff" exact component={Staff}/>
          <Route path="/reservation" exact component={Reservation}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer />
      </Router>
    </div>;
}

export default App;