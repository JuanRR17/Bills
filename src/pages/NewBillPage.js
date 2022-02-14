import React, {useState,useEffect} from 'react';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import BillDetails from '../components/NewBill/BillDetails/BillDetails';
import Entries from '../components/NewBill/Entries'
import styled from 'styled-components';
import CancelButton from '../components/Buttons/CancelButton';
import ViewButton from '../components/Buttons/ViewButton';
import { routes } from '../utils/pages';

const NewBillPage = () => {
    const client = JSON.parse(localStorage.editClient);
    const company = localStorage.companyDetails ? JSON.parse(localStorage.companyDetails) : undefined;

    useEffect(() => {
    
    if (localStorage.newBillDetails)
        setArticleList(JSON.parse(localStorage.newBillDetails).articles )
    }, []);


    const [articleList, setArticleList] = useState([]);
    const [subtotal, setSubtotal] = useState(0);  
    const IVA = subtotal*21/100;
    const total = subtotal + IVA;

    const updateBill = () => {
        localStorage.removeItem("newBillDetails")
        Object.assign(newBillDetails,{
            cod:billCode,
            date:formatedDate,
            time:date.toLocaleTimeString(),
            client:client,
            company:company,
            articles:articleList,
            subtotal:subtotal.toFixed(2),
            iva:IVA.toFixed(2),
            total:total.toFixed(2)
        });
        localStorage.setItem("newBillDetails",JSON.stringify(newBillDetails));
    };


    useEffect(() => {
        setSubtotal(()=>{
            var sum=0;
            articleList.map(item=>sum=sum+item.total)
            return sum;
            })
        updateBill()
    });

    var date = new Date();

    const create0Num = (num,size) =>{
        num = num.toString();
        while (num.length < size)
            num="0"+num;
        return num;
    };

    const billIDInit=Number(localStorage.billNum);
    const billIDOriginal = billIDInit ? billIDInit : 1;

    localStorage.setItem("billNum",JSON.stringify(billIDOriginal));
    const billID = create0Num(billIDOriginal,5);

    const billCode = `#${billID}-${create0Num(date.getDate(),2)}${create0Num(date.getMonth()+1,2)}${date.getFullYear()}`;
    const formatedDate = `${create0Num(date.getDate(),2)}-${create0Num(date.getMonth()+1,2)}-${date.getFullYear()}`;

    const newBillDetails = {
        id:billID,
        cod:billCode,
        date:formatedDate,
        time:date.toLocaleTimeString(),
        client:client,
        company:company,
        articles:articleList,
        subtotal:subtotal.toFixed(2),
        iva:IVA.toFixed(2),
        total:total.toFixed(2)
    };
    return (
        <BillsFrame>
            <h1 className="header m-2">New Bill</h1>
            <Input className="container">
                {newBillDetails && <BillDetails data={newBillDetails}/>}
                <div className="row text-600 text-white bgc-default-tp1 py-25">
                    <div className="d-none d-sm-block col-1">#</div>
                    <div className="col-9 col-sm-5">Description</div>
                    <div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
                    <div className="d-none d-sm-block col-sm-2 text-right">Price (before VAT)</div>
                    <div className="col-2 text-right">Total</div>
                </div>
                <Entries 
                    articleList={newBillDetails.articles}
                    handleSetArticleList={(value)=>setArticleList(value)}
                />
            </Input>
                <div className="row justify-content-center my-3">
                    <div className="col-auto">  
                        <ViewButton href={routes.billPreview} />
                    </div> 
                    <div className="col-auto"> 
                        <CancelButton href={routes.clientsList} />
                    </div>   
                </div>
        </BillsFrame>
    );
};

export default NewBillPage;

const Header=styled.div`
    text-align:center;
    font-family: 'Alfa Slab One', cursive;
`;

const Input = styled.div`
    height:auto;
    border:2px solid black;
    margin-top:20px;
    color: #484b51;
    background-color: rgb(255,255,255,0.8);

 .text-600 {
    font-weight: 600!important;
}
 .py-25 {
    padding-bottom: .75rem!important;
    padding-top: .75rem!important;
}

.bgc-default-tp1 {
    background-color: rgba(121,169,197,.92)!important;
}

`;

