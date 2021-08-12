import React from 'react';
import "./App.css";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import MountFujiRoute from "./Map/MountFujiRoute";
import ImperialTokyo from './Map/ImperialTokyo';
import OsakaCastle from "./Map/OsakaCastal";

import MtFujiHotel from "./CityHotel/MtFujiHotel";
import ImTokyoHotel from "./CityHotel/ImTokyoHotel";
import OsakaHotel from "./CityHotel/OsakaHotel";

import HotelCheckIn from "./HotelCheckIn/HotelCheckIn";
import HotelConfire from "./HotelConfire/HotelConfire";

import MtFujiFlight from "./CityFlight/MtFujiFlight";
import ImTokyoFlight from "./CityFlight/ImTokyoFlight";
import OsakaFlight from "./CityFlight/OsakaFlight";

import MtFujiFlightCheckIn from "./FlightCheckIn/MtFujiFlightCheckIn";
import ImTokyoFlightCheckIn from "./FlightCheckIn/ImTokyoFlightCheckIn";
import OsakaFlightCheckin from "./FlightCheckIn/OsakaFlightCheckin";

import MtFujiFlightConfire from "./FlightConfire/MtFujiFlightConfire";
import ImTokyoFlightConfire from "./FlightConfire/ImTokyoFlightConfire";
import OsakaFlightConfire from "./FlightConfire/OsakaConfire";

import Payment from "./PayMent/Payment";

function App() {
    return (
  
    <Router>
      <div className= "App">
        <Switch>
           <Route exact path="/" component = {Home}/>
           
           <Route path="/mount-fuji" component={MountFujiRoute} />
           <Route path="/imperial-tokyo" component={ImperialTokyo} />
           <Route path="/osaka-castle" component={OsakaCastle} />

           <Route path = "/hotel-near-mount-fuji" component = {MtFujiHotel}/>
           <Route path = "/hotel-near-imperial-tokyo" component = {ImTokyoHotel}/>
           <Route path = "/hotel-near-osaka-castal" component = {OsakaHotel}/>

           <Route path =  "/hotel-check-in" component = {HotelCheckIn}/>
           <Route path = "/hotel-confire" component = {HotelConfire}/>

           <Route path = "/mount-fuji-flight" component = {MtFujiFlight}/>
           <Route path = "/imperial-tokyo-flight" component = {ImTokyoFlight}/>
           <Route path = "/osaka-castal-flight" component = {OsakaFlight}/>

           <Route path = "/mt-fuji-flight-check-in" component = {MtFujiFlightCheckIn}/>
           <Route path = "/imperial-tokyo-flight-check-in" component = {ImTokyoFlightCheckIn}/>
           <Route path = "/osaka-castal-flight-check-in" component = {OsakaFlightCheckin}/>

           <Route path = "/flight-confire-mt-fuji" component = {MtFujiFlightConfire}/>
           <Route path = "/flight-confire-imperial-tokyo" component = {ImTokyoFlightConfire}/>
           <Route path = "/flight-confire-osaka-castal" component = {OsakaFlightConfire}/>

           <Route path = "/payment" component = {Payment}/>
          
          
            
        </Switch>
      </div>
    </Router>
  
    
    )
}
export default App;