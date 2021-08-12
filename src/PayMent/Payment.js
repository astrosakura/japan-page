import React, { useState } from "react"
import { Button } from '@material-ui/core';
import "./Payment.css";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import {Redirect} from "react-router-dom";
import Modal from 'react-modal';


function Payment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cost, setCost] = useState("");
  const [focus, setFocus] = useState("");

// **********************************     for modal        *******************************************
 const [isModal, setIsModal ] = useState(false)
 

  // ****************************   Redircting ******************************************************

  const [isAuth, setIsAuth] = useState(true);
  if(!isAuth) {
  return <Redirect to = "/"/>

}




return(

  <div className = "card6">
    <div className = "paymentNav">
    <Button class ={"deleteBtn"}  onClick={() => setIsAuth(false)}><span className = "x">X</span></Button>
      <p><span className = "textX">Payment Method</span></p>
     
    <div className="container">
    <div className = "paymentCard">

    <Cards 
    number = {number}
    name = {name}
    expiry = {expiry}
    cvc = {cvc}
    focused={focus}
    />

    <form>
      <input 
      type = 'tel'
      name = 'number'
      className = "inputField"
      placeholder = 'Card number'
      value = {number}
      onChange = {e =>setNumber(e.target.value)}
      onFocus = {e => setFocus(e.target.name)}
      />

      <input 
      type = 'text'
      name = 'name'
      className = "inputField"
      placeholder = 'Name'
      value = {name}
      onChange = {e =>setName(e.target.value)}
      onFocus = {e => setFocus(e.target.name)}
      />

     <input 
      type = 'text'
      name = 'expiry'
      className = "inputField2"
      placeholder = 'MM/YY Expiry'
      value = {expiry}
      onChange = {e =>setExpiry(e.target.value)}
      onFocus = {e => setFocus(e.target.name)}
      />

     <input 
      type = 'tel'
      name = 'cvc'
      className = "inputField2"
      placeholder = 'CVC'
      value = {cvc}
      onChange = {e =>setCvc(e.target.value)}
      onFocus = {e => setFocus(e.target.name)}
      />

     <input 
      type = 'text'
      name = 'cost'
      className = "inputField"
      placeholder = 'Amount'
      value = {cost}
      onChange = {e =>setCost(e.target.value)}
      onFocus = {e => setFocus(e.target.name)}
      />

      


    </form>
    </div>
    </div>
    <footer className = "footer">
        <Button onClick = {() => setIsModal(true)}><span className = "textX">Confire Payment</span></Button>
        <Modal 
        isOpen = {isModal} 
        onRequestClose = {() => {setIsModal(false)}}
        style = {
          {
            overlay:{
              backgroundColor: 'grey'
            },
            content: {
              color:'orange',
              width: '45%',
              height: '25vh',
              marginLeft: '25%'
              
            }
          }
        }
        >
          
          <div>
          <p className = "paymentDone">Your Payment is sucessful</p>
            <Button
            onClick = {() => setIsModal(false)}
            style = {
              {
               float: 'right',
               marginTop: '8%',
               backgroundColor: "black",            
              }
            }
            >
              Close
              </Button>
          </div>
        </Modal>
       
      </footer>
  </div>
</div>

)
}
export default Payment



  
   
   
       

