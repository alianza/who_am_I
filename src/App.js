import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { AnimatedSwitch } from "react-router-transition";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import About from "./components/Pages/About/About";
import Menu from "./components/Layout/Menu/Menu";
import Result from "./components/Pages/Result/Result";
import { ReactComponent as Wave } from 'assets/wave.svg'
import React from "react";

function App() {
  return (
      <Router>
          <div id="app" className={'text-text-primary'}>

              <div id={'background'} className={'fixed w-full h-full bg-primary top-0'}/>

              <Menu/>

              <Wave id={'wave'} className={'fixed bottom-0 bg-primary transition-transform origin-bottom scale-x-450 scale-y-650 animate-waveSm xsm:scale-150 xsm:animate-waveXsm sm:scale-100 sm:animate-wave'}/>

              <AnimatedSwitch
                  atEnter={{opacity: 0}}
                  atLeave={{opacity: 0}}
                  atActive={{opacity: 1}}
                  className={'relative'}>

                  <Route exact path='/' component={Home}/>

                  <Route exact path={['/result', '/result/:name', '/result/:name/:countryCode']} component={Result}/>

                  <Route path="/about" component={About}/>

                  <Route component={NotFound}/>

              </AnimatedSwitch>

              <Loader/>

          </div>
      </Router>
  );
}

export default App;
