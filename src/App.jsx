import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar/NavBar';
import Routes from './Routes/Routes';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes />
        <Footer />
      </div>
    </>
  );
}

export default App;
