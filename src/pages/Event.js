import '../App.css';

import {Eventi} from '../Eventi';
import {Constomer} from  '../Constomer';
import {Navigation} from '../Navigation';

import {BrowserRouter, Route ,Switch} from 'react-router-dom';


function Event() {
  
  return (
    <BrowserRouter>
    <div className="container">
       <h3 className="m-3 d-flex justify-content-center">
        Event register
      </h3>

      <Navigation/>

         <Switch>
           < Route path='/eventi' component={Eventi} />
           < Route path='/constomer' component={Constomer} />
         </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default Event;
