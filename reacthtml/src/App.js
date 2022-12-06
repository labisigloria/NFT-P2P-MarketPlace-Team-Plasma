import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/Popup';
import dashboard from './pages/dashboard';
import Nfts from './pages/Nfts';
import Swap from './pages/Swap';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import './App.css';

function App() {
  return <div>
    <Router>
    <Header />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/dashboard' component={dashboard}/>
      <Route path='/Nfts' component={Nfts} />
      <Route path='/Swap' component={Swap} />
    </Switch>
    <Home />
    <Footer />
    <Popup />
    </Router>
  </div>;
  
}

export default App;
