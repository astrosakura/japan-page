import React, { useState } from 'react';
import firebase from '../Firebase'
import "./FlightCheckIn.css";
import Select  from 'react-select';
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import RoomIcon from '@material-ui/icons/Room';


const colourOptions = [
  { value: 'nagpur', label: 'Dr. Babasaheb Ambedkar International Airport' },
  ]

const dataOptions = [
  { value: 'osaka', label: 'Osaka' }
]


const OsakaCastalFlightCheckin = (props)=> {
    const [isFirstName, setIsFirstName] = useState('');
    const [isLastName, setIsLastName] = useState('');
    const [isNationality, setIsNationality] = useState('');
    const [isEmail, setIsEmail] = useState('');
    const [isNumber, setIsNumber] = useState('');

    const [clickCount, setClickCount] = useState(0);

    const onClick = e => {
      setClickCount(clickCount + 1);
      e.preventDefault();
      e.stopPropagation();
    };

    const handleSubmit =() => {
    const firestore = firebase.database().ref('/FlightCheckIn');
    let data = {
        FirstName: isFirstName,
        LastName: isLastName,
        PhoneNumber: isNumber,
        Nationality: isNationality,
        Email:isEmail
    }
    firestore.push(data);
    };

  
    return (
        <div>
        <div class="cardCheckIn">
  <div class="container">
 <form>
     <h3>User Detail</h3>
    <label for = "fname" >First Name:</label><br/>
     <input  
     id = "fname" 
     name = "fname" 
     className = "hotelBookingInput" 
     placeholder = "First Name"  
     focus value = {isFirstName} onChange = {(e) => {setIsFirstName(e.target.value)}} 
     required
     /><br/>
    
    <label for = "lname">Last Name:</label><br/>
    <input 
    id = "lname" 
    name = "lname" 
    className = "hotelBookingInput" 
    placeholder = "Last Name"  
    focus value = {isLastName} onChange = {(e) => {setIsLastName(e.target.value)}} 
    required
    /><br/>
    
    <label for = "source">Source  :</label><br/>
    <Select 
      {...props}
      id = "source"
      name = "source"
      className = "locationPicker"
      onEmojiClick={onClick}
      name="citySelect"
      isSearchable
      options={colourOptions}
      placeholder = " Where From ?"
      />
    <br/>    

    <label for = "destination">Destination:</label><br/>
    <Select
      {...props}
      id = "destination"
      name = "destination"
      className = "locationPicker"
      onEmojiClick={onClick}
      isSearchable
      options={dataOptions}
      placeholder =  { <RoomIcon/>}  
      />
      <br/>

    <label for = "Nname">Nationality:</label><br/>
    <input 
    id ="Name" 
    name = "Name" 
    className = "hotelBookingInput" 
    placeholder = "Nationnality"  
    focus value = {isNationality} onChange = {(e) => {setIsNationality(e.target.value)}} 
    required
    /><br/>
    

    <label for = "email">Email:</label><br/>
    <input 
    id = "email" 
    name = "email" 
    className = "hotelBookingInput" 
    placeholder = "Email"  
    focus value = {isEmail} 
    onChange = {(e) => {setIsEmail(e.target.value)}} 
    required
    /><br/>
    
    <label for = "noname">Number :</label><br/>
    <input 
    id ="noname" 
    name = "noname" 
    className = "hotelBookingInput" 
    placeholder = "Number"  
    focus value = {isNumber} onChange = {(e) => {setIsNumber(e.target.value)}} 
    required
    /><br/>
    
        <Button 
         style = {{backgroundColor: "black", marginTop: '8%', width: "30%"}}
         component = {Link} to = "/flight-confire-osaka-castal"
         onClick = {() => {handleSubmit()}} >
           <b>SUBMIT</b>
            </Button>
    </form>
  </div>
</div>
</div>
    )
}

export default OsakaCastalFlightCheckin






