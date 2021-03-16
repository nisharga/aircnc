import React from 'react';
import Nav from '../../Shared/Nav/Nav';

const Header = () => {
    return ( 
            <header> 
                <div className='container'>
                   <div className='row'>
                       <div className='col-md-12'>
                          <Nav></Nav> 
                       </div>
                    </div> 
                </div> 

                <hr></hr>
            </header>  
    );
};

export default Header;