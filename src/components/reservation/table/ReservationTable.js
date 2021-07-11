import React from 'react';
import './_reservationtable.scss';

const ReservationTable = () => {
    return (
        <>
        <h1 className="title">Boka bord</h1>
        <form className="formTable">
            <input type="text" name="fname" placeholder="Namn" />
            <input type="text" name="lname" placeholder="Antal personer" />
            <input type="text" name="lname" placeholder="Telefon" />
            <input type="email" name="lname" placeholder="Email" />
            <textarea placeholder="Önskemål ang. maten"></textarea>
        </form>
        </>
    )
}

export default ReservationTable;