import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import '../Coming.css';

const ComingContent = () => {
    return (
        <div>
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
                    <h5>3. Confirm and pay 
                    <FaArrowRight className='titleIcon' /></h5>
               </div>
           </div>

        <div className='container'>
            <div className='row'>
                <div className='col-md-10 mt-5'>
                  <h5><b>Traveling for work?</b></h5>
                  <p>Say hello to your host</p>
                  <p>Let Rowdra know a little about yourself and why you’re coming.</p>

                  <textarea require rows="4" cols="50" placeholder='Let Rowdra! connot wait to spend 4 night in your home' style={{padding: '10px'}} className='form-control'> 
                    </textarea>
                <Link to='./payment' className='agreeBtn mt-5'>Continue</Link> 
                </div>
                <div className='col-md-2'>
                    <figure className='man'>
                        <img src={require('../../../images/man.jpg')}
                        alt={'mab'}></img>
                        <figcaption>Rowdra</figcaption>
                    </figure>
                </div>
            </div>
        </div>

             

        
        </div>
    );
};

export default ComingContent;