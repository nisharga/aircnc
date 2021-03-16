import React, { useState } from 'react'; 
import './SearchSection.css';
import DatePicker from "react-datepicker";
import { FaCalendar } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchSection = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [division, setDivision] = useState('dhaka')
    
    const [adult, setAdult] = useState(2)
    const [child, setChild] = useState(1)
    const [kid, setKid] = useState(0) 

    const totalPerson = adult + child + kid;
    const url = `./${startDate}/${endDate}/${division}/${totalPerson}`;

    console.log(startDate.toISOString().replace('-', '/').split('T')[0].replace('-', '/'))
    return (
        <div>
            <div className='locationSearch form-control'>
                <label><b>LOCATION</b></label><br></br> 

                <select class="form-select" aria-label="Default select example" className="form-control" onChange={e => setDivision(e.target.value)}>
                <option selected>Add city landmark or address</option>
                <option value="dhaDka">Dhaka Division</option>
                <option value="barisal">Barisal Division</option>
                <option value="rangpur">Rangpur Division</option>
                <option value="chittagong">Chittagong Division</option>
                <option value="khulna">Khulna Division</option>
                <option value="mymensingh">Mymensingh Division</option>
                <option value="rajshahi">Rajshahi Division</option>
                <option value="sylhet">Sylhet Division</option>
                </select>
            </div>

            <br></br>

            <div className="date-picker row justify-content-between">
                <div className="startDate col-md-5 form-control">
                    <label><b>Arrival</b></label>
                    <DatePicker 
                        selected={startDate} 
                        onChange={date => setStartDate(date)} /> <FaCalendar className='icon'/>
                </div>
                <div className="endDate col-md-5 form-control">
                    <label><b>Departure</b></label>
                    <DatePicker 
                        selected={endDate} 
                        onChange={date => setEndDate(date)} /> <FaCalendar className='icon'/>
                </div>
            </div>

            <br></br>

            <div className='guestsSearch form-control d-flex justify-content-between'>
                <div className='guestsList'>
                    <label><b>Guests</b></label><br></br>
                    <h6>{`${adult} ADULTS ${child} CHILD ${kid} KID`}</h6>
                </div>
                <div style={{marginTop: '25px'}}>
                <FaArrowUp className='icon'/> 
                </div>
            </div>

            <div className='personSearch form-control'>
                <div className='row mt-2 mb-3'>
                    <div className='adultList col-sm-4'>
                        <h6><b>ADULTS</b></h6>
                    </div>
                    <div className='countPerson ml-auto col-sm-8'>
                       <button onClick={() => setAdult(adult - 1)}> 
                         <FaMinus className='icon'/>
                        </button>
                       <h6>{adult}</h6>
                       <button onClick={() => setAdult(adult + 1)}> 
                         <FaPlus className='icon'/>
                       </button>
                    </div>
                </div>

                <div className='row mt-2 mb-3'>
                <div className='childList col-sm-4'>
                    <h6><b>CHILD</b></h6>
                </div>
                <div className='countChild col-sm-8 ml-auto'>
                       <button onClick={() => setChild(child - 1)}> 
                         <FaMinus className='icon'/>
                        </button>
                       <h6>{child}</h6>
                       <button onClick={() => setChild(child + 1)}> 
                         <FaPlus className='icon'/>
                       </button>
                </div>
                </div>

                <div className='row mt-2 mb-3'>
                <div className='babyList col-sm-4'>
                    <h6><b>BABIES</b></h6>
                </div>
                <div className='countBaby col-sm-8 ml-auto'>
                       <button onClick={() => setKid(kid - 1)}> 
                         <FaMinus className='icon'/>
                        </button>
                       <h6>{kid}</h6>
                       <button onClick={() => setKid(kid + 1)}> 
                         <FaPlus className='icon'/>
                       </button>
                </div>
                </div>
            </div>
            <Link to={url} className='apply'>APPLY</Link>
            <br></br>
            <br></br>
            <br></br>
            <Link to={url} className='search btn-block'>
            <FaSearch className='icon'/>Search</Link>

        </div>
    );
};

export default SearchSection;