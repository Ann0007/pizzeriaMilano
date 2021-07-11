import React, {useState} from 'react'
import './_reservation.scss';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Calendar from '../calendar/Calendar';
import TakeAway from './TakeAway';
import ReservationTable from './table/ReservationTable';
import pizza from '../../images/food.jpg';

const Reservation = () => {
  const [toggle, setToggle] = useState(true);

  const toggleChecked = () => {
    setToggle(toggle => !toggle)
  }

  return (
    <>
      <Navbar/> 
      <div className="btnsDiv">
        <button className="formBtns tableBtn" onClick={toggleChecked}>Boka bord</button>
        <button className="formBtns" onClick={toggleChecked}>Boka avhämtning</button>
      </div>
      <div className="reservation-container">
        <div className="form">
          {toggle && <ReservationTable /> }
          {!toggle && <TakeAway /> }
          <Calendar />
        </div>
        <div className="infoDiv">
          <img src={pizza} className="pizzaImage" alt="pizza" />
          <p className="infoTitle">Välkomna</p>
          <p className="infoText">Tänk på att er bokning inte är garanterad om den inte är bekräftad.</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Reservation;