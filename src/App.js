import React, {useEffect} from "react"
import Container from 'react-bootstrap/Container';
import {Switch, Route, useHistory} from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import NavBar from './NavBar';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Col from 'react-bootstrap/Col';
import Home from './Home'
import Resume from './Resume'
import Biotech from './Biotech'
import ARVR from './ARVR'
import Telecom from './Telecom'
import ProbeCards from './ProbeCards'
import Slides from './Slides'
import Optics from './Optics'
import Simulations from './Simulations'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const App = (props) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://kit.fontawesome.com/97b2936aa0.js";
    script.async = true;
    script.crossorigin="anonymous"

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
      <Container style={{display: 'flex'}}>
        <Col style={{width: '200px', paddingTop:'75px', paddingRight:'20px'}}>
          <NavBar/>
        </Col>
        <Col>
          <h1>Hi! I am Steven Wang, PhD.</h1>
          <h2>Mechanical Engineer and Project Leader</h2>
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route exact path="/resume"><Resume /></Route>
              <Route exact path="/slides"><Slides /></Route>
              <Route exact path="/ar-vr"><ARVR /></Route>
              <Route exact path="/telecom"><Telecom /></Route>
              <Route exact path="/probecards"><ProbeCards /></Route>
              <Route exact path="/biotech"><Biotech /></Route>
              <Route exact path="/optics"><Optics /></Route>
              <Route exact path="/simulations"><Simulations/></Route>
            </Switch>
        </Col>
      </Container>
    )
}

export default App
