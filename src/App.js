import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Components/Share/Header/Header';

function App() {
  return (
    <>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
            <Home></Home>
         </Route>
       </Switch>
     </Router> 
    </>
  );
}

export default App;
