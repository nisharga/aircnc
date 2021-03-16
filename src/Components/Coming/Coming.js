import React from 'react';
import PriceTable from '../Shared/PriceTable/PriceTable'; 
import PriceTable2 from '../Shared/PriceTable2/PriceTable2';
import './Coming.css';
import ComingContent from './ComingContent/ComingContent';

const Coming = () => {
    return (
        <div className='houserule'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 mt-5'>
                        <ComingContent></ComingContent>
                    </div>
                    <div className='col-md-5'>
                        <PriceTable2></PriceTable2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coming;