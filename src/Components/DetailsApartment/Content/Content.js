import React from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

const Content = ({title, divison}) => {
    return (
        <div className='contentAppartment'>
            <div className='title container'>
                <div className='row'>
                    <div className='col-md-9'>
                        <h3>{title ? title : 'Light bright airy stylish apt & safe peaceful stay'}</h3>
                        <h5>{divison}, Bangladesh</h5>
                        <h5>4 guests   2 bedrooms   2 beds   2 baths</h5>
                    </div>
                    <div className='col-md-3'>
                    <figure className='man'>
                        <img src={require('../../../images/man.jpg')}
                        alt={'mab'}></img>
                        <figcaption>Rowdra</figcaption>
                    </figure>
                        

                    </div>
                </div>
                <hr></hr>
            </div>

            <div className='contentDetails container'>
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={require('../../../images/1.png')} alt={'icon'}></img>
                    </div>
                    <div className='col-md-10'>
                         <h5><b>Entire home</b></h5>
                         <p>You’ll have the condominium to yourself.</p>
                    </div>
                </div>
                
                <div className='row'>
                    <div className='col-md-2'>
                        <img src={require('../../../images/2.png')} alt={'icon'}></img>
                    </div>
                    <div className='col-md-10'>
                         <h5><b>Self check-in</b></h5>
                         <p>You can check in with the doorman.</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2'>
                        <img src={require('../../../images/3.png')} alt={'icon'}></img>
                    </div>
                    <div className='col-md-10'>
                         <h5><b>Sparkling clean</b></h5>
                         <p>10 recent guests said this place was sparkling clean.</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2'>
                        <img src={require('../../../images/4.png')} alt={'icon'}></img>
                    </div>
                    <div className='col-md-10'>
                         <h5><b>Rowdra is a Superhost</b></h5>
                         <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                    </div>
                </div>

                <hr></hr>
            </div>

            <div className='pera container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p>It’s newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free.You’ll love my place for its lovely and bright looks comfortable stay.Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm.It’s newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free.You’ll love my place for its lovely and bright looks comfortable stay.Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm.</p>
                    </div>
                </div>
            </div>

            <div className='readMore'>
                <Link to='/apartment/details'>Read more about the space</Link>
            </div>

            <div className='container bottom mb-3'>
                <div className='row'>
                    <div className='col-md-12 mt-2'>
                        <h4>Reviews</h4>
                    </div>
                </div>
                <div className='row contentRating'>
                    <div className='col-md-12'>
                        <img src={require('../../../images/singleRating.png')} alt={'icon'}></img>
                        <p><b>4.9</b>(20 reviews)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;