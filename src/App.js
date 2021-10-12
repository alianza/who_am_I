import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { AnimatedSwitch } from "react-router-transition";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import About from "./components/Pages/About/About";
import Menu from "./components/Layout/Menu/Menu";
import Result from "./components/Pages/Result/Result";

function App() {
  return (
      <Router>
          <div id="app" className={'text-text-primary'}>

              <Menu/>

                  <AnimatedSwitch
                      atEnter={{opacity: 0}}
                      atLeave={{opacity: 0}}
                      atActive={{opacity: 1}}
                      className={'h-screen bg-primary'}
                  >
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
