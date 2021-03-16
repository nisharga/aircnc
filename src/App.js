import React, { createContext, useState } from 'react'; 
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Apartment from './Components/Apartment/Apartment';
import DetailsApartment from './Components/DetailsApartment/DetailsApartment';
import HouseRule from './Components/HouseRule/HouseRule';
import Coming from './Components/Coming/Coming';
import Payment from './Components/Payment/Payment';
import Done from './Components/Shared/Done/Done';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';
import Strip from './Components/Shared/Strip/Strip';

export const userContext = createContext();

function App() {
  const [logInUser, setLoginUser] = useState([]);
  const [person, setPerson] = useState([]);
  return (
    <userContext.Provider value={[logInUser, setLoginUser, person, setPerson]}>
       
      <Router>
      <div> 
        <Switch>  
          <Route path="/done">
            <Done></Done>
          </Route>
          <Route path="/payment">
            <Strip></Strip>
            <Payment></Payment>
          </Route>

           <Route path="/coming">
            <Coming></Coming>
          </Route>  
          
          <PrivateRoute path="/houserule">
             <HouseRule></HouseRule>
          </PrivateRoute>

          <Route path="/:divison/:totalPerson/:startDate/:endDate/:title/:review/:price">
            <DetailsApartment></DetailsApartment>
          </Route>

         

          <Route path="/:startDate/:endDate/:divison/:totalPerson">
            <Apartment></Apartment>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Login></Login>
          </Route>
          <Route path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
    </Router>


    </userContext.Provider>
  );
}

export default App;
