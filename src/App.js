import './App.css';
//import {Navbar} from 'react-responsive-navbar-overlay';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home'
import MyNavbar from './components/MyNavbar'
/*import "reactjs-navbar/dist/index.css";


import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs,
  faAnchor,
  faDizzy,
  faWater,
  faAdjust,
  faCheese,
  faGhost,
  faKey,
  faBell,
  faFan,
  faCarSide,
  faJedi,
  faLaughBeam
} from '@fortawesome/free-solid-svg-icons';
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <MyNavbar/>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Home} />
            <Route path="/blog" component={Home} />
        </BrowserRouter>
    </div>
  );
}

export default App;
