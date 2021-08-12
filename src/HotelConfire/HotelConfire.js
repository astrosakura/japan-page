import React from 'react';
import "./HotelConfire.css"
import firebase from "../Firebase"
import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { Segment, Header} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";


const  HotelBookTicket =() => {
   
    const [userData, setUserData] = useState([]);
   
    useEffect(() => {
        const firestore = firebase.database().ref('/UserInfo2');
        firestore.on('value', (responce) => {
            const data = responce.val();
            let userInfo2 = [];
            for(let id in data) {
                userInfo2.push ({
                    id:id,
                    FirstName:data[id].FirstName,
                    LastName:data[id].LastName,
                    Nationality:data[id].Nationality,
                    PersonCount:data[id].PersonCount,
                    PhoneNumber:data[id].PhoneNumber,
                });
            }

            setUserData(userInfo2);
        })
    }, []);

   

//**************************************  FOR DETETE USER DATA   **********************************************/

   const handleDeleteUser =(id) => {
    const firestore = firebase.database().ref('/UserInfo2').child(id);
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
    <h2><b>Your Booking</b></h2>
   
    { userData.length == 0 ? ( <Segment>
            <Header  textAlign = "center" > 
                Oops! There is no data available. Please Enter some Data.
            </Header>
        </Segment>
    ):(
         <table className = "hotelBooking">
                 <tr className = "headertr">
                     <th>FirstName</th>
                     <th>LastName</th>
                     <th>Nationality</th>
                     <th>Person</th>
                     <th>PhoneNumber</th>
                 </tr>
            
             {
                 userData.map((data, index) => {
                     return  <><tr>
                         <td>{data.FirstName}</td>
                         <td>{data.LastName}</td>
                         <td>{data.Nationality}</td>
                         <td>{data.PersonCount}</td>
                         <td>{data.PhoneNumber}</td>
                         </tr>
                        
                         <tr>
                           <td></td> 
                           <td></td>
                       <td><Button style = {{backgroundColor: '#cc0000', marginTop: '5%'}} onClick = {() => {handleDeleteUser(data.id)}}> <span className = "btnFont" >Delete</span></Button></td>
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

export default HotelBookTicket
