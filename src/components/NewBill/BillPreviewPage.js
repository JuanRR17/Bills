import React from 'react';
import BillsFrame from '../BillsFrame/BillsFrame';
import Bill from '../Bill';
import BackButton from '../Buttons/BackButton/BackButton';
import CancelButton from '../Buttons/CancelButton';
import SaveButton from '../Buttons/SaveButton';
import { routes } from '../../utils/pages';

const VistaFacturaPage = () => {
    const newBillDetails = JSON.parse(localStorage.newBillDetails);
    const billID = Number(localStorage.billNum);
    const submitBill = () =>{
        var billsList=[];
        if(localStorage.billsList){
            const originalBillList = JSON.parse(localStorage.billsList);
            billsList=[...originalBillList, newBillDetails];
        }else{
            billsList=[newBillDetails];
        }     
        localStorage.setItem("billsList",JSON.stringify(billsList));
        localStorage.removeItem("newBillDetails");
        localStorage.setItem("billNum",JSON.stringify(billID+1));
    }

    return (
        <BillsFrame>
            <Bill data={newBillDetails}/>
            <div className="row justify-content-center my-3">
                <div className="col-auto">
                    <SaveButton href={routes.billsList} clickHandler={submitBill}/>
                </div>   
                <div className="col-auto"> 
                    <BackButton href={routes.newBill}/>
                </div>  
                <div className="col-auto"> 
                    <CancelButton href={routes.clientsList}/>
                </div>   
            </div>
        </BillsFrame>
    );
};

export default VistaFacturaPage;
