import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Staff from './pages/Staff';
import Reservation from './pages/Reservation';
import Search from './pages/Search';
import Order from './pages/Order';
import Aplikimet from './pages/Aplikimet';
import Event from './pages/Event';
import Products from './components/Products';
import { productData } from './components/Products/data';
import Dashboard from './pages/Dashboard';
import Salary from './pages/Salary';
import Notifications from './pages/Notifications';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/" component={Home} />
      <Switch>
          <ProtectedRoute path="/menu" exact component={Menu}/>
          <ProtectedRoute path="/about" exact component={About}/>
          <ProtectedRoute path="/staff" exact component={Staff}/>
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          <Route path="/aplikimet" exact component={Aplikimet}/>
          <Route path="/reservation" exact component={Reservation}/>
          <Route path="/event" exact component={Event}/>
          <ProtectedRoute path="/Order" exact component={Order}/>
          <ProtectedRoute path="/Salary" exact component={Salary}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/notifications" exact component={Notifications}/>
          {/* <Products heading='Choose your favorite' data={productData}/> */}
          
        </Switch>

        <Footer />
    </BrowserRouter>
    </div>
  );

  // pa sign-in
  // return <div className="App">
  //     <Router>
  //       <Navbar />
        // <Switch>
        //   <Route path="/" exact component={Home}/>
        //   <Route path="/menu" exact component={Menu}/>
        //   <Route path="/about" exact component={About}/>
        //   <Route path="/staff" exact component={Staff}/>
        //   <Route path="/aplikimet" exact component={Aplikimet}/>
        //   <Route path="/reservation" exact component={Reservation}/>
        //   <Route path="/event" exact component={Event}/>
        //   <Route path="/Order" exact component={Order}/>
        //   <Route path="/search" exact component={Search}/>
        //   <Route path="/contact" exact component={Contact}/>
        //   <Route path="/products" exact component={Products}/>
          
        //   {/* <Products heading='Choose your favorite' data={productData}/> */}
          
        // </Switch>
  //       <Switch>
  //         <Route path="/Dashboard" exact component={Dashboard}/>
  //       </Switch>
        
  //       <Footer />
        
  //     </Router>
  //   </div>;
}

export default App;