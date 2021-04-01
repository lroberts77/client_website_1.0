import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Home/Home';
import Products from './components/Pages/About/About';
import SignUp from './components/Pages/Contact/Contact';
import Services from './components/Pages/Services/Services';

function App() {
  return (
    <>
    {/* <Navbar />
    <HeroSection /> */}

    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
