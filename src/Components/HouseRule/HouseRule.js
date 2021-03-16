import React from 'react'; 
import { userContext } from '../../App';
import PriceTable2 from '../Shared/PriceTable2/PriceTable2';
import './HouseRule.css';
import HouseRuleContent from './HouseRuleContent/HouseRuleContent';


const HouseRule = ({title, price, review, totalPerson, fromDate, toDate
, daySpend, total}) => {
 

    return (
        <div className='houserule'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 mt-5'> 
                        <HouseRuleContent></HouseRuleContent>
                    </div>
                    <div className='col-md-5'>
                        <PriceTable2></PriceTable2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRule;