import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/Home'
import MyNavbar from './components/MyNavbar'

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
