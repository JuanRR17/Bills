import React, {useState, useEffect} from 'react';
import { RiDeleteBinLine} from 'react-icons/ri';
import styled from 'styled-components';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import ViewButton from '../components/Buttons/ViewButton';


const BillsListPage = () => {
    const bills  = localStorage.billsList ? JSON.parse(localStorage.billsList) : undefined;

    const [billsList, setBillsList] = useState();
    const [subtotal, setSubtotal] = useState(0);
    const [IVA, setIVA] = useState(0);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        if(bills)
        setBillsList(bills)
    },[]);

    useEffect(() => {
        if(billsList){
        setSubtotal(()=>{
            var sumSubtotal=0;
            billsList.map(item=>sumSubtotal=sumSubtotal+Number(item.subtotal))
            return sumSubtotal;
            });
        setIVA(()=>{
            var sumIVA=0;
            billsList.map(item=>sumIVA=sumIVA+Number(item.iva))
            return sumIVA;
            });
        setTotal(()=>{
            var sumTotal=0;
            billsList.map(item=>sumTotal=sumTotal+Number(item.total))
            return sumTotal;
            });};
    }, [billsList]);

    const renderList = () => {
        return billsList.map(bill =>{
            return(
                <tr key={bill.cod}>
                <th  scope="row">{bill.cod}</th>
                <td >{bill.date}</td>
                <td >{bill.client.name}</td>
                <td className="values">{bill.subtotal} €</td>
                <td className="values">{bill.iva} €</td>
                <td className="values">{bill.total} €</td>
                <td className="text-center p-0">
                    <button type="button" className="btn btn-danger m-1" 
                    onClick={()=>removeBill(bill.cod)}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove Bill">
                        <RiDeleteBinLine/>
                    </button>
                    <ViewButton href="/billView" target="_blank" 
                        clickHandler={()=>displayBill(bill)}/>
                </td>
                </tr>
                )
            }
        );
    };

    const displayBill = (item) =>{
        const billToBeDisplayed = billsList.find((b) => b.cod ===item.cod);
        localStorage.removeItem("billDetails");
        localStorage.setItem("billDetails",JSON.stringify(billToBeDisplayed));
    };

    const removeBill = (id) => {
        const index = bills.findIndex((it)=>it.cod===id);
        bills.splice(index,1);
        localStorage.setItem("billsList",JSON.stringify(bills));
        setBillsList(bills);
    };

    return (
        <BillsFrame>
            <div className="container d-grid gap-2 pt-3">
                <h1 className="header">BILLS LIST</h1>
                <Table className="row p-3 table-responsive">
                {billsList ?
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th className="col-2" scope="col"> Bill Code</th>
                            <th className="col-2" scope="col">Date</th>
                            <th className="col-3" scope="col">Client</th>
                            <th className="values col" scope="col">Subtotal</th>
                            <th className="values col" scope="col">VAT</th>
                            <th className="values col" scope="col">Total</th>
                            <th className="col-auto" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {bills ? renderList() : <div className='text-center'>"No Bills Storaged"</div>}
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th className="values" scope="col">TOTAL</th>
                            <th className="values" scope="col">{subtotal.toFixed(2)} €</th>
                            <th className="values" scope="col">{IVA.toFixed(2)} €</th>
                            <th className="values" scope="col">{total.toFixed(2)} €</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
                    :
                    <div className='text-center no-data'>No Bills storaged</div>
                }
                </Table>
            </div>
        </BillsFrame>
    );
};

export default BillsListPage;

const Table = styled.div`
    background-color: rgb(255,255,255,0.7);
    border-radius: 10px;
    .values{
        text-align: right;
        }
`;