import React from 'react';
import './PriceTable.css';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

const PriceTable = ({price, review, totalPerson, fromDate, toDate, daySpend, title}) => {

    
    
    // default
    const cleening = 10;
    const service = 21;
    
    const total = (price, daySpend, cleening, service) => {
        const mainBill = price * daySpend;
        const other = cleening + service;
        return mainBill + other;
    }

 
    // const url = `/${review}/${fromDate}/${toDate}/${totalPerson}/${daySpend}`;
    // const url = `/${price}/${review}/${totalPerson}/${fromDate}/${toDate}/${daySpend}`;

    const url = `/houserule`;
     
    return (
        <div className="priceTable"> 
            <h4><b>${price}/</b>night</h4>
            <div className="icon">
                <img 
                    src={require('../../../images/singleRating.png')} 
                    alt={'icon'}
                    className='priceRating'>
                </img>
                <h5>{review}</h5>
            </div>

            <div className="datePriceTable">
                <label>Dates</label>
                <div className="d-flex justify-content-between">
                     <input type="text" value={fromDate} className='form-control'></input>
                     <input type="text" value={toDate} className='form-control'></input>
                </div>
            </div>
            
            <div className="datePriceTable">
                <label>Guests</label>
                <input type="text" value={totalPerson} className='form-control' disabled></input><FaArrowDown />
            </div>

            <div className='calculate d-flex justify-content-between rlp'>
                <h5>${price} * {daySpend} nights</h5>
                <h5>${price * daySpend}</h5>
            </div>
            <hr></hr>

            <div className='d-flex justify-content-between rlp'>
                <h5>Cleening fee</h5>
                <h5>${cleening}</h5>
            </div>
            <hr></hr>
            
            <div className='d-flex justify-content-between rlp'>
                <h5>Service fee</h5>
                <h5>${service}</h5>
            </div>
            <hr></hr>
            
            <div className='d-flex justify-content-between rlp total mb-2'>
                <h4>Total</h4>
                <h4>${total(price, daySpend, cleening, service)}</h4>
            </div>

            <Link to={url} 
            className='reserve btn-block'>Reserve</Link>
            <p>You wouldn't be charged yet</p>
        </div>
    );
};

export default PriceTable;