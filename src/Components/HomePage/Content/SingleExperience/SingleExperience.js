import React from 'react';
import { Link } from 'react-router-dom';
import Experiences from '../../../Shared/FakeData/Experiences';
import '../Content.css';

const SingleExperience = () => {
    return (
        <div className="row experinceHome"> 
            {
                Experiences.map(data =>
                    <div className="col-md-3 col-sm-6 col-xs-12 box">

                    <Link to={'./'} className='SingleExperience'>
                       <img src={require(`../../../../images/picture/${data.pic}`)} className='img-fluid' alt="Experience"></img> 
                        <h6 className='location'>{data.location}</h6> 
                        <h6 className='title'><b>{data.title}</b></h6>
                        <p>{data.person}</p>
                            <div className="reviewBox">
                                <img src={require(`../../../../images/Rating.png`)} alt='rating'></img>
                                <p>{data.review}</p>
                            </div>
                       </Link>

                    </div>

                           )
                       }
        </div>
    );
};

export default SingleExperience;