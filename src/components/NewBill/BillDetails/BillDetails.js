import React from 'react';
import styled from 'styled-components';

const BillDetails = (props) => {
    const {
        data
    }=props;
    return (
        <DetailsContainer className="row">
            <div className="col-sm-6">
                <div>
                    <span className="text-m text-grey-m2 align-middle">Client: </span>
                </div>
                <div>
                    <span className="text-sm text-grey-m2 align-middle">Name: </span>
                    <span className="text-600 text-110 text-blue align-middle">{data.client.name}</span>
                </div>
                <div>
                    <span className="text-sm text-grey-m2 align-middle">NIF: </span>
                    <span className="text-600 text-110 text-blue align-middle">{data.client.nif}</span>
                </div>
                <div className="text-grey-m2">
                    <div className="my-1">
                        {data.client.address}
                    </div>
                    <div className="my-1">
                        {data.client.country}
                    </div>
                    <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary"></i> <b className="text-600">{data.client.phone}</b></div>
                </div>
            </div>

            <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                <hr className="d-sm-none" />
                <div className="text-grey-m2">
                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> 
                    <span className="text-600 text-90"> Bill:</span> {data.id}
                    </div>
                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> 
                        <span className="text-600 text-90"> Cod:</span> {data.cod}
                    </div>
                    <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> 
                        <span className="text-600 text-90"> Date:</span> {data.date}
                    </div>
                </div>
            </div>
    </DetailsContainer>
    );
};

export default BillDetails;

const DetailsContainer = styled.div`
    height:auto;
    margin-top:20px;
    color: #484b51;

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
