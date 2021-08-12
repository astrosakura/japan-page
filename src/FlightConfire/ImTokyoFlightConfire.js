import React from 'react';
import "./FlightConfire.css"
import firebase from "../Firebase"
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Segment, Header} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";


const  AmerFortFlightConfire =() => {
   
    const [userData, setUserData] = useState([]);
   
    useEffect(() => {
        const firestore = firebase.database().ref('/FlightCheckIn');
        firestore.on('value', (responce) => {
            const data = responce.val();
            let FlightCheckin = [];
            for(let id in data) {
                FlightCheckin.push ({
                    id:id,
                    FirstName:data[id].FirstName,
                    LastName:data[id].LastName,
                    Nationality:data[id].Nationality,
                    Email:data[id].Email,
                    PhoneNumber:data[id].PhoneNumber,
                });
            }

            setUserData(FlightCheckin);
        })
    }, []);

   

//**************************************  FOR DETETE USER DATA   **********************************************/

   const handleDeleteUser =(id) => {
    const firestore = firebase.database().ref('/FlightCheckIn').child(id);
    firestore.remove()
   } 

// ************************    Redirect  to  Payment page***************************************************

const [isAuth, setIsAuth] = useState(true);
if(!isAuth) {
return <Redirect to = "/payment"/>
}

    return (
        <>

    <div class="card4">
    <h1>Your Booking</h1>
   
    { userData.length == 0 ? ( <Segment>
            <Header  textAlign = "center" > 
                Oops! There is no data available. Please Enter some Data.
            </Header>
        </Segment>
    ):(
        
         <table className = "flightConfire1">
            
                 <tr>
                     <th>FlightNo</th>
                     <th>FirstName</th>
                     <th>LastName</th>
                     <th>Source</th>
                     <th>Destination</th>
                     <th>Nationality</th>
                     <th>Email</th>
                     <th>PhoneNumber</th>
                     <th>SeatNo</th>
                 </tr>
             {
                 userData.map((data, index) => {
                    
                     return <>  <tr>
                         <td>NART571348905</td>
                         <td>{data.FirstName}</td>
                         <td>{data.LastName}</td>
                         <td>Dr. Babasaheb Ambedakar International Airport, Nagpur</td>
                         <td>Narita International Airport, Tokyo</td>
                         <td>{data.Nationality}</td>
                         <td>{data.Email}</td>
                         <td>{data.PhoneNumber}</td>
                         <td>ARE308</td>
                     </tr>

                        <tr>
                           <td></td> 
                           <td></td>
                           <td></td>
                         
                          <td><Button style = {{backgroundColor: '#cc0000'}} onClick = {() => {handleDeleteUser(data.id)}}> <span className = "btnFont" >Delete</span></Button></td>
                           <td><Button style = {{backgroundColor: '#00c851'}} onClick={() => setIsAuth(false)}><span className = "btnFont">Pay</span></Button></td>
                        </tr>
                        <hr/>
                        </>
                        
                    }) 
             }
             
         </table>
            
    )}
    
    </div>
</>

 )
}

export default AmerFortFlightConfire
