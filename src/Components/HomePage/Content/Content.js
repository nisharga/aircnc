import React from 'react'; 
import './Content.css'; 
import SingleExperience from './SingleExperience/SingleExperience';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SingleHome from './SingleHome/SingleHome';
import SearchSection from './SearchSection/SearchSection';

const Content = () => { 
    return (
        <div className='content'>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-4 col-sm-12'>
                        <h4><b>Where do you want to go</b></h4>
                        <br></br>
                        <SearchSection></SearchSection>
                   </div>

                   <div className='col-md-8 col-sm-12'>  
                    <div className='d-flex justify-content-between'>
                       <h4><b>Experiences  </b></h4> 
                       <Link to={'./'}>See all <FaArrowRight/></Link>
                    </div>
                    <SingleExperience></SingleExperience>

                    <br></br>

                    <div className='d-flex justify-content-between'>
                       <h4><b>Homes</b></h4> 
                       <Link to={'./'}>See all <FaArrowRight/></Link>
                    </div>
                    <SingleHome></SingleHome>
                   </div>

                   

               </div> 

           </div>
        </div>
    );
};

export default Content;