import './App.css';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import ContactUs from './Components/ContactUs/ContactUs';
function App() {
  return (
    <div >
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/aboutUs">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
