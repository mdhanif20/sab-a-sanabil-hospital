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




// https://app.netlify.com/teams/mdhanif20/overview
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
       </Switch>
     </Router> 
    </AuthProvider>
  );
}

export default App;
