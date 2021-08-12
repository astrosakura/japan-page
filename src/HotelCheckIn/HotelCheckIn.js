import React, { useState } from 'react';
import firebase from '../Firebase'
import "./HotelCheckIn.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";

const HotelCheckIn = ()=> {
    const [isFirstName, setIsFirstName] = useState('');
    const [isLastName, setIsLastName] = useState('');
    const [isNationality, setIsNationality] = useState('');
    const [isPeopleCount, setIsPeopleCount] = useState('');
    const [isNumber, setIsNumber] = useState('');

    const handleSubmit =() => {
    const firestore = firebase.database().ref('/UserInfo2');
    let data = {
        FirstName: isFirstName,
        LastName: isLastName,
        PhoneNumber: isNumber,
        Nationality: isNationality,
        PersonCount:isPeopleCount
    }
    firestore.push(data);
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div>
        <div class="cardCheckIn">
  <div class="container">
 <form>
     <h3>User Detail</h3>
    <label for = "fname" >First Name:</label><br/>
     <input  id = "fname" name = "fname" className = "hotelBookingInput" placeholder = "First Name"  focus value = {isFirstName} onChange = {(e) => {setIsFirstName(e.target.value)}} required/><br/>
    
    <label for = "lname">Last Name:</label><br/>
    <input id = "lname" name = "lname" className = "hotelBookingInput" placeholder = "Last Name"  focus value = {isLastName} onChange = {(e) => {setIsLastName(e.target.value)}} required/><br/>
    
    <label for = "inName">Check In  :</label><br/>
    <DatePicker
      id = "inName"
      name = "inName"
      className = "datePicker"
      closeOnScroll={(e) => e.target === document}
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    /><br/>

    <label for = "outName">Check Out:</label><br/>
    <DatePicker
        id = "outName"
        name = "outName"
        className = "datePicker"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      /><br/>


    <label for = "Nname">Nationality:</label><br/>
    <input id ="Name" name = "Name" className = "hotelBookingInput" placeholder = "Nationnality"  focus value = {isNationality} onChange = {(e) => {setIsNationality(e.target.value)}} required/><br/>
    

    <label for = "pname">Person:</label><br/>
    <input 
    id = "pname" 
    name = "pname" 
    className = "hotelBookingInput" 
    placeholder = "How Many Person"  
    focus value = {isPeopleCount} 
    onChange = {(e) => {setIsPeopleCount(e.target.value)}} 
    required
    /><br/>
    
    <label for = "noname">Number :</label><br/>
    <input id ="noname" name = "noname" className = "hotelBookingInput" placeholder = "Number"  focus value = {isNumber} onChange = {(e) => {setIsNumber(e.target.value)}} required/><br/>
    
        <Button className = 'btnSubmitdetail' component = {Link} to = "/hotel-confire" onClick = {() => {handleSubmit()}} >
           <b>SUBMIT</b>
            </Button>
    </form>
  </div>
</div>
</div>
    )
}

export default HotelCheckIn






