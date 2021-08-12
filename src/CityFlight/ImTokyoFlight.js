import React from 'react'
import "./CityFlight.css";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";




function ImTokyoFlight() {
    return (
        <div>
          <h2>All Flight</h2>

<table class = "center">
  <div className = "card3">
  <tr>
    <th>Number</th>
    <th>Source</th>
    <th>Destination</th>
    <th>Arrival</th>
    <th>Departure</th>
    <th>Price</th>
    <th>Book</th>
  </tr>
  

  <tr>
    <td>HAND5709812356</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Haneda International Airport, Tokyo</td>
    <td>21-08-2021 9:30pm</td>
    <td>22-09-2021 9.45am</td>
    <td>₹40,000</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to=   "/imperial-tokyo-flight-check-in" >
         <span >Book</span>
      </Button>
    </td>
  </tr>
  </div>

  <div className = "card3">
  <tr>
    <th>Number</th>
    <th>Source</th>
    <th>Destination</th>
    <th>Arrival</th>
    <th>Departure</th>
    <th>Price</th>
    <th>Book</th>
  </tr>
  <tr>
   <td>NART571348905</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Narita International Airport, Tokyo</td>
    <td>19-08-2021 11:30pm</td>
    <td>20-08-2021 3.45am</td>
    <td>₹40,432</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to=  "/imperial-tokyo-flight-check-in" >
         <span >Book</span>
      </Button>
     </td> 
  </tr>
  </div>
</table>

          </div>
          
    )
}

export default ImTokyoFlight
