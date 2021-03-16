import React from 'react';
import Nav from '../../Shared/Nav/Nav';
import doneImg from '../../../images/done.gif';
import { Link } from 'react-router-dom';
const Done = () => {
    
    return (
        <div>
            <Nav></Nav>
            <img src={doneImg} alt={'img'}
            style={{marginLeft: '50px'}}>
            </img> <br></br>
            <Link
            style={{marginLeft: '50px', fontSize: '20px', marginTop: '150px'}}
             to='/'>Visit Our Home Page</Link>
        </div>
    );
};

export default Done;