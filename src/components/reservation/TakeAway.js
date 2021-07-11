import React, {useState} from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import '../reservation/table/_reservationtable.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

const TakeAway = () => {
    const [value,setValue]=useState('');
    const [count,setCount,]=useState('');
    const [type,setType,]=useState('');

    const handleSelectPizza=(e)=>{
        setValue(e)
    }

    const handleSelectCount=(e)=>{
        setCount(e)
    }

    const handleSelectType=(e)=>{
        setType(e)
    }

    const SelectedItemstoCart=(e)=> {
        e.preventDefault();
        setType(e)
        setCount(e)
        setValue(e)
      }
      
    return (
        <>
            <h1 className="title">Boka avhämtning</h1>
            <form className="formTable">
                <input type="text" name="fname" placeholder="Namn" />
                <input type="text" name="lname" placeholder="Telefon" />
                <input type="email" name="lname" placeholder="Email" />
                <div className="choose">
                <p className="choosenTitle">Välj din / dina pizzor: </p>
                    <div className="selectBoxes">
                        <DropdownButton
                            className= "pickPizza"
                            alignRight
                            title="Pizza"
                            id="pizza"
                            size="sm"
                            variant="secondary"
                            onSelect={handleSelectPizza}
                                >
                            <Dropdown.Item eventKey="Margaritha">Margaritha 80 kr</Dropdown.Item>
                            <Dropdown.Item eventKey="Vesuvio">Vesuvio 80 kr</Dropdown.Item>
                            <Dropdown.Item eventKey="Roma">Roma 90 kr</Dropdown.Item>
                            <Dropdown.Item eventKey="Kebabpizza">Kebabpizza 90 kr</Dropdown.Item>
                            <Dropdown.Item eventKey="Lakersspecial">Lakers special 99 kr</Dropdown.Item>
                            <Dropdown.Item eventKey="Vegetariskpizza">Vegetarisk pizza 85 kr</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            alignRight
                            className="numberOfPizza"
                            title="Antal"
                            id="dropdown-menu-align-right"
                            size="sm"
                            variant="secondary"
                            onSelect={handleSelectCount}
                                >
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                            <Dropdown.Item eventKey="4">4</Dropdown.Item>
                            <Dropdown.Item eventKey="5">5</Dropdown.Item>
                            <Dropdown.Item eventKey="6">6</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton
                            alignRight
                            className="pizzaType"
                            title="Pizzatyp"
                            id="type-of-pizza"
                            size="sm"
                            variant="secondary"
                            onSelect={handleSelectType}
                                >
                            <Dropdown.Item eventKey="Standard">Standard</Dropdown.Item>
                            <Dropdown.Item eventKey="Familjepizza">Familjepizza</Dropdown.Item>
                            <Dropdown.Item eventKey="Barnpizza">Barnpizza</Dropdown.Item>                   
                        </DropdownButton>
                    </div>
                    <div className="choosenItemBox">
                        <p className="choosenTitle">Du har valt: </p>
                        <div className="choosenValues">
                            <p className="valueItem">Pizza: {value}</p>
                            <p className="valueItem">Antal: {count}</p>
                            <p className="valueItem">Pizzatyp: {type}</p>
                            <button className="chooseButton" onClick={SelectedItemstoCart}> Lägg till</button>
                        </div>
                    </div>
                </div>
                <textarea placeholder="Önskemål ang. maten"></textarea>
            </form>
        </>
    )
}

export default TakeAway;