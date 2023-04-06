import React, { useState } from 'react';
import EventDuration from '../../component/eventDuration';
import PaymentCalculator from '../../component/paymentCalculator';
import { Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



export default function CheckoutPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [setupDate, setSetupDate] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transportCharge, setTransportCharge] = useState('');
  const [distance, setDistance] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSetupDateChange = (event) => {
    setSetupDate(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    console.log(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleTransportChargeChange = (event) => {
    setTransportCharge(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic here, such as sending data to a server
  };

  return (
    <div style={{textAlign:'center', padding:'30px'}}>
      <h1><ShoppingCartCheckoutIcon style={{fontSize:"50px"}}/>Checkout Page</h1>
      <form onSubmit={handleSubmit}>
        <Table striped bordered hover size="sm" >
          <tbody>
          <tr>
            <td>    <div>
          <label htmlFor="startDate">Event Start Date:</label>
          <input
            type="datetime-local"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleStartDateChange}
            required
          />
        </div></td>
         
            <td>
            <div>
          <label htmlFor="endDate">Event End Date:</label>
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleEndDateChange}
            required
          />
        </div></td>
          </tr>
          <tr>
            <td> <div>
          <label htmlFor="setupDate">Setup Date:</label>
          <input
            type="datetime-local"
            id="setupDate"
            name="setupDate"
            value={setupDate}
            onChange={handleSetupDateChange}
            required
          />
        </div></td>
       
             <td>
        <div>
          <label htmlFor="location">Event Location:</label>
          <select id="location" name="location" value={location} onChange={handleLocationChange} required>
            <option value="">--Select a location--</option>
            <option value="10">Baghajatin, Kolkata, WB</option>
            <option value="20">Garia, Kolkata, WB</option>
            <option value="15">Sealdaha, Kolkata, WB</option>
            <option value="25">Jadavpur, Kolkata, WB</option>
          </select>
        </div></td> 
          </tr>
          <tr>
            <td> <EventDuration startDate={startDate} endDate={endDate} /></td>
          <td> <PaymentCalculator transportCharge={1500} distance={location} /></td></tr>
           
          </tbody>
            </Table>  
            </form>
</div>
  )

}