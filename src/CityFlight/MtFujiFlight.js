import React from 'react'
import "./CityFlight.css";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";




function MtFujiFlight() {
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
    <td>SHIZ134269870</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Mt. Fuji Shizuoka Airport, Shizuoka</td>
    <td>1-09-2021 5:00pm</td>
    <td>02-09-2021 11.35am</td>
    <td>₹35,908</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to= "/mt-fuji-flight-check-in" >
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
   <td>SHIZ567432091</td>
    <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
    <td>Mt. Fuji Shizuoka Airport, Shizuoka</td>
    <td>29-08-2021 11:30pm</td>
    <td>30-08-2021 3.45am</td>
    <td>₹47,432</td>
    <td>
      <Button  
         style = {{backgroundColor: 'black', padding: '6px 20px', color: 'lightgrey'}}
         component={Link} to= "/mt-fuji-flight-check-in" >
         <span >Book</span>
      </Button>
     </td> 
  </tr>
  </div>
</table>

          </div>
          
    )
}

export default MtFujiFlight
