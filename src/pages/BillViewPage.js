import React from 'react';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import Bill from '../components/Bill';

const BillViewPage = () => {
    const billDetails = JSON.parse(localStorage.billDetails);

    return (
        <BillsFrame>
            <Bill data={billDetails}/>
        </BillsFrame>
    );
};

export default BillViewPage;
