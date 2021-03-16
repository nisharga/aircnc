import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav2 from '../Shared/Nav2/Nav2';
import './Apartment.css';
import ApartmentData from '../../Components/Shared/FakeData/ApartmentData'
import SingleApartment from './SingleApartment/SingleApartment';
import Map from '../Shared/Map/Map';
const Apartment = () => {
    
    let { divison } = useParams();  
    let { totalPerson } = useParams();  
    let { startDate } = useParams();  
    let { endDate } = useParams();  
    
    const monthStart = new Date(startDate).toLocaleString('en-us', { month: 'short' })
    const monthEnd = new Date(endDate).toLocaleString('en-us', { month: 'short' })
    const dayStart = new Date(startDate).getDate(); 
    const dayEnd = new Date(endDate).getDate(); 

    const date = monthStart + ' ' + dayStart + '-' + monthEnd + '' + dayEnd;
    
     
    return (
        <div>
            <Nav2 
                divison={divison} 
                date={date} 
                totalguest={totalPerson}>
            </Nav2>
            <hr></hr>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 offset-md-1 
                    apartmentSection">
                        <h6>{date}, {totalPerson} guests</h6>
                        <h4><b>Stay in  
                        <span className="capi">
                        {divison}</span>      
                         Division</b></h4>
                        <div className="tag">
                            <Link to='/apartment'>Cancellation flexibility</Link> 
                            <Link to='/apartment'>Type of place</Link>
                            <Link to='/apartment'>Price</Link>
                            <Link to='/apartment'>Instant Book</Link>
                            <Link to='/apartment'>More Filters</Link>
                        </div>

                        {
                            ApartmentData.map(data => 
                            <SingleApartment 
                                data={data} 
                                key={data.id}
                                divison={divison}
                                totalPerson={totalPerson}
                                startDate={startDate}
                                endDate={endDate}>

                            </SingleApartment>)
                        }
                    </div>

                    <div className="col-md-6">
                        <Map divison={divison}></Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Apartment;