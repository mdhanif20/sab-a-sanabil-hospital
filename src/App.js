import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Components/Share/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import Login from './Components/Login/Login';
import ServiceDetails from './Components/Details/ServiceDetails';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Share/Footer/Footer';
import ContactUs from './Components/Contactus/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import OurServices from './Components/OurServices/OurServices';



function App() {
  return (
    <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/details/:serviceId">
           <ServiceDetails></ServiceDetails>
         </Route>
         <Route path="/about">
           <AboutUs></AboutUs>
         </Route>
         <Route path="/services">
           <OurServices></OurServices>
         </Route>
         <Route path="/contact">
           <ContactUs></ContactUs>
         </Route>
         <Route path="*">
          <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router> 
    </AuthProvider>
  );
}

export default App;
