// Import Libraries
import React from 'react';
import Header from './header';
import Footer from './footer';
import "./App.css";
import List from './list';

// Create component
function App(){
  return (
    <div className="App">
    <h1>Hello React</h1>
    <Header />
    <List /> 
    <Footer />
    </div>
  );
}

// Export Default
export default App;
