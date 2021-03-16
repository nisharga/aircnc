import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import '../Payment.css';
import Strip from '../../Shared/Strip/Strip';
import { Link } from 'react-router-dom';

const PaymentContent = () => {
    return (
        <div>
            <Link to='/done' className='agreeBtn'>PAY</Link>
                <br></br>
                <br></br>
                <h4>Payment Selection</h4>
           <div className='row'>
               <div className='col-md-4 titleArrow'>
                    <h5><b>1. Reviews house rules 
                    <FaArrowRight className='titleIcon' /></b></h5>
               </div>
               <div className='col-md-4 titleArrow'>
                    <h5><b>2. Who’s coming? 
                    <FaArrowRight className='titleIcon' /></b></h5> 
               </div>
               <div className='col-md-4 titleArrow'>
                    <h5><b>3. Confirm and pay 
                    <FaArrowRight className='titleIcon' /></b></h5>
               </div>
           </div>

        <div className='container'>
            <div className='row mt-5'>  
            </div>
        </div>

             

        
        </div>
    );
};

export default PaymentContent;