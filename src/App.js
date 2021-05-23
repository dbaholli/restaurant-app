import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import Home1 from './components/Home1';



function App() {
  return (
    <>
    <Router>
     
      <Navbar />
      
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Home1' exact component={Home1}/>
      </Switch>
      <Footer />
      </Router>
   </>
  );
}

export default App;
