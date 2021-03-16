import React from 'react';
import { useParams } from 'react-router';
import Nav2 from '../Shared/Nav2/Nav2';
import PriceTable from '../Shared/PriceTable/PriceTable';
import Content from './Content/Content';
import './DetailsApartment.css';

const DetailsApartment = () => { 
    let { divison,totalPerson, startDate, endDate, title,
        price,review} = useParams();

    const monthStart = new Date(startDate).toLocaleString('en-us', { month: 'short' })
    const monthEnd = new Date(endDate).toLocaleString('en-us', { month: 'short' })
    const dayStart = new Date(startDate).getDate(); 
    const dayEnd = new Date(endDate).getDate(); 

    const date = monthStart + ' ' + dayStart + '-' + monthEnd + '' + dayEnd;
    
    const fromDate = new Date(startDate).getDate() + "/" + (new Date(startDate).getMonth() + 1) + "/" + new Date(startDate).getFullYear()
    ;
    const toDate = new Date(endDate).getDate() + "/" + (new Date(endDate).getMonth() + 1) + "/" + new Date(endDate).getFullYear();
    
    const daySpend = new Date(endDate).getDate() - new Date(startDate).getDate();
    
    return (
        <div className="detailsApartment">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Nav2
                           divison={divison}
                           totalguest={totalPerson}
                           date={date}
                        ></Nav2>
                    </div>
                </div>
            </div>
           
           <hr></hr>
           <div className="container-fluid topApart">
              <div className="row">
                  <div className="col-md-5">
                      <img src={require(`../../images/apartment1.jpg`)} 
                      alt={'appartment1'} className="img-fluid"></img>
                  </div>
                  <div className="col-md-7">
                  <img src={require(`../../images/apartment2.jpg`)} 
                      alt={'appartment2'} className="img-fluid"></img>
                  </div>
              </div>
            </div> 
            
            <div className="container">
              <div className="row">
                  <div className="col-md-7">
                      <Content
                        title={title}
                        divison={divison}
                      ></Content>
                  </div>
                  <div className="col-md-5">
                      <PriceTable
                        price={price}
                        review={review}
                        totalPerson={totalPerson}
                        fromDate={fromDate}
                        toDate={toDate}
                        daySpend={daySpend}
                        title={title}
                      ></PriceTable>
                  </div>
              </div>
            </div> 
        </div>
    );
};

export default DetailsApartment;