import React from 'react';
import PriceTable from '../Shared/PriceTable/PriceTable'; 
import PriceTable2 from '../Shared/PriceTable2/PriceTable2';
import './Payment.css';
import PaymentContent from './PaymentContent/PaymentContent';

const Payment = () => {
    return (
        <div className='houserule'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 mt-5'>
                        <PaymentContent></PaymentContent>
                    </div>
                    <div className='col-md-5'>
                        <PriceTable2></PriceTable2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;