import React from 'react';
import EntriesEntered from './NewBill/EntriesEntered';
import styled from 'styled-components';
import BillDetails from './NewBill/BillDetails/BillDetails';

const Bill = (props) => {
    const{
        data
    } = props;

    return (
        <BillContainer className="page-content container p-4 col-11 col-lg-8 col-xl-6">
            <div className="container px-0">
                <div className="row mt-1">
                    <div className="col-12 col-lg-12">
                        <BillDetails data={data}/>
                        <div className="mt-4">
                            <div className="row text-600 text-white bgc-default-tp1 py-25 align-items-center">
                                <div className="d-none d-sm-block col-1">#</div>
                                <div className="col-9 col-sm-5">Description</div>
                                <div className="d-none d-sm-block col-4 col-sm-1">Qty</div>
                                <div className="d-none d-sm-block col-sm-3 text-right">Price <br/> (before VAT)</div>
                                <div className="col-2">Total</div>
                            </div>

                            <EntriesEntered
                                articleList={data.articles}
                                showxicon={"none"}
                                />
                            <div className="row border-b-2 brc-default-l2"></div>

                            <div className="row mt-3 justify-content-between">
                                <div className="col-12 col-sm-6 text-grey-d2 text-95 mt-2 mt-lg-0">
                                    <div>
                                        <span className="text-m text-grey-m2 align-middle">Business: </span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-grey-m2 align-middle">Name: </span>
                                        <span className="text-600 text-110 text-blue align-middle">{data.company.name}</span>
                                    </div>
                                    <div>
                                        <span className="text-sm text-grey-m2 align-middle">NIF: </span>
                                        <span className="text-600 text-110 text-blue align-middle">{data.company.nif}</span>
                                    </div>
                                    <div className="text-grey-m2">
                                        <div className="my-1">
                                            {data.company.address}
                                        </div>
                                        <div className="my-1">
                                            {data.company.country}
                                        </div>
                                        <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary"></i> <b className="text-600">{data.company.phone}</b></div>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-6 text-grey text-90">
                                    <div className="row my-2">
                                        <div className="col-5 text-right">
                                            SubTotal
                                        </div>
                                        <div className="col-7 text-right">
                                            <span className="text-120 text-secondary-d1 text-right">{data.subtotal}€</span>
                                        </div>
                                    </div>

                                    <div className="row my-2">
                                        <div className="col-5 text-right">
                                            VAT(21%)
                                        </div>
                                        <div className="col-7 text-right">
                                            <span className="text-110 text-secondary-d1 text-right">{data.iva}€</span>
                                        </div>
                                    </div>

                                    <div className="row my-2 align-items-center justify-content-end bgc-primary-l3">
                                        <div className="text-150 col-5 text-right">
                                            Total 
                                        </div>
                                        <div className="col-7 text-right">
                                            <span className="text-150 text-success-d3 opacity-2 text-right">{data.total}€</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BillContainer>
    ); 
};

export default Bill;


const BillContainer = styled.div`
    height:auto;
    border:2px solid black;
    margin-top:20px;
    color: #484b51;
    background-color: rgb(255,255,255,0.8);

.text-secondary-d1 {
    color: #728299!important;
}

.text-grey-m2 {
    color: #888a8d!important;
}

.text-600 {
    font-weight: 600!important;
}

.text-110 {
    font-size: 110%!important;
}
.text-blue {
    color: #478fcc!important;
}
.py-25 {
    padding-bottom: .75rem!important;
}

.pt-25, .py-25 {
    padding-top: .75rem!important;
}
.bgc-default-tp1 {
    background-color: rgba(121,169,197,.92)!important;
}

.text-120 {
    font-size: 120%!important;
}
.text-blue-m2 {
    color: #68a3d5!important;
}
.text-150 {
    font-size: 150%!important;
}
.text-60 {
    font-size: 60%!important;
}
.text-right{
    text-align:right;
}
`;

