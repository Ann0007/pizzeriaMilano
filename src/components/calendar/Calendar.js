import React, { useState }  from 'react';
import DatePicker from "react-datepicker";
import subDays from "date-fns/subDays";
import "react-datepicker/dist/react-datepicker.css";
import './_calendar.scss';


const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [confirm, setConfirm] = useState(false);

    const handleOnClick = () => {
        console.log('confirm')
        setConfirm(true);
    };

    let minTime = new Date();
    minTime.setMinutes(0);
    minTime.setHours(12);

    let maxTime = new Date();
    maxTime.setMinutes(60);
    maxTime.setHours(22);

    return (
        <div className="calendarContainer">
        <p className="chooseDate">Välj datum</p>
        <DatePicker 
            selected={startDate} 
            onChange={date => setStartDate(date)} 
            excludeDates={[new Date(), subDays(new Date(), -8)]}
            minDate={new Date()}
            showTimeSelect
            minTime={minTime}
            maxTime={maxTime}
            timeIntervals={45}
        />
        <button className="confirmBtn" onClick={handleOnClick}>Boka</button>
        {confirm ? <p className="confirmText">Reserverat. Välkommen!</p> : ''}
        {/* name: {tmpName} */}
        </div>
    )
}
export default Calendar;