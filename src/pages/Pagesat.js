import React from 'react';
import {ProductProvider} from '../Context';
import Home from '../components/Home';

function Pagesat() {
  return (
    <div className="App">
      <ProductProvider />
      <Home />
    </div>
  );
}

export default Pagesat;
