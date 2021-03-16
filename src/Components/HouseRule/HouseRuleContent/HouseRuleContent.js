import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './../HouseRule.css';

const HouseRuleContent = () => {
    return (
        <div>
           <div className='row'>
               <div className='col-md-4 titleArrow'>
                    <h5><b>1. Reviews house rules 
                    <FaArrowRight className='titleIcon' /></b></h5>
               </div>
               <div className='col-md-4 titleArrow'>
                    <h5>2. Who’s coming? 
                    <FaArrowRight className='titleIcon' /></h5> 
               </div>
               <div className='col-md-4 titleArrow'>
                    <h5>3. Confirm and pay 
                    <FaArrowRight className='titleIcon' /></h5>
               </div>
           </div>

           <div className='row mt-4'>
               <div className='col-md-12'>
                   <h3><b>Review house rules</b></h3>
                   <h5>3 nights in Dhaka</h5> 
               </div>
           </div>
           
           <div className='row mt-2'>
               <div className='col-md-2 bgPoderBlue'>
                    APR<br></br>13
               </div>
               <div className='col-md-4'>
                   <p>Monday check-in</p>
                   <p>After 12:00 PM</p>
               </div>
               <div className='col-md-2 bgPoderBlue'>
                    APR<br></br>15
               </div>
               <div className='col-md-4'>
                   <p>Thursday checkout</p>
                   <p>11:00 AM</p>
               </div>

               <p>Self check-in with building staff</p> 
           </div>
           <hr></hr>

           <h5 className='mb-4'><b>Things to keep in mind</b></h5>

           <div className='keep-in-mind row'>
                <div className='col-md-2'>
                    <img src={require('../../../images/5.png')} alt={'f'}>
                    </img>
                </div>
                <div className='col-md-10 text-left'>
                    <p>Suitable for children and infants</p>
                </div>
           </div>

           <div className='keep-in-mind row'>
                <div className='col-md-2'>
                    <img src={require('../../../images/6.png')} alt={'f'}>
                    </img>
                </div>
                <div className='col-md-10 text-left'>
                    <p>Pets allowed</p>
                </div>
           </div>
           
           <div className='keep-in-mind row'>
                <div className='col-md-2'>
                    <img src={require('../../../images/7.png')} alt={'f'}>
                    </img>
                </div>
                <div className='col-md-10 text-left'>
                    <p>No parties or events</p>
                </div>
           </div>

           <div className='keep-in-mind row mb-4'>
                <div className='col-md-2'>
                    <img src={require('../../../images/8.png')} alt={'f'}>
                    </img>
                </div>
                <div className='col-md-10 text-left'>
                    <p>Smoking allowed</p>
                </div>
           </div>

        <Link to='./coming' className='agreeBtn'>Agree and continue</Link>
        </div>
    );
};

export default HouseRuleContent;