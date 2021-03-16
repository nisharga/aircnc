import React from 'react';
import { Link } from 'react-router-dom';
import './SingleApartment.css';

const SingleApartment = ({data, divison, totalPerson, startDate, endDate}) => {
    const title = data.title;
    const review = data.review;
    const price = data.price;

    const url = `/${divison}/${totalPerson}/${startDate}/${endDate}/${title}/${review}/${price}`;

    return (
        <Link to={url} className='SingleApartment mt-3 mb-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img 
                        src={require(`../../../images/picture/${data.pic}`)} 
                        alt='appartment'
                        className='img-fluid apartmentImg'>
                        </img>
                    </div>
                    <div className='col-md-8'>
                        <h6><b>{data.title}</b></h6>
                        <p>{data.totalRoom}</p>
                        <p>{data.feature}</p>
                        <p>{data.cancle}</p>

                        <div className='footerApartment d-flex justify-content-between'>
                            <div className='reviewApartment'>
                                <img src={require(`../../../images/singleRating.png`)} 
                                alt={'rating'}>
                                </img>
                                <p><b>{data.review}</b></p>
                            </div>
                            <div className='priceApartment'>
                                <h6>${data.price}/ night</h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr></hr>
        </Link>
    );
};

export default SingleApartment;