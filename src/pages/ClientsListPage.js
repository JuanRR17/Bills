import React, {useState, useEffect} from 'react';
import { AiOutlineFileAdd} from 'react-icons/ai';
import {FaRegEdit} from 'react-icons/fa';
import {MdPersonAddAlt1, MdPersonRemoveAlt1} from 'react-icons/md';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import styled from 'styled-components';

const ClientsListPage = () => {
    const list = localStorage.clientsList ? JSON.parse(localStorage.clientsList) : undefined;
    localStorage.removeItem("newBillDetails");

    const [clientList, setClientList] = useState();

    useEffect(() => {
        setClientList(list)
    }, []);

    useEffect(() => {
    }, [clientList]);

    const disable = localStorage.companyDetails ? false : true;
    const href = localStorage.companyDetails ? "/newBill" : "#";

    const renderList = () => {
        return clientList.map(client =>{ 
            return(
                <tr key={client.id}>
                <th scope="row">{client.id}</th>
                <td>{client.name}</td>
                <td>{client.nif}</td>
                <td>{client.phone}</td>
                <td>{client.address}</td>
                <td>{client.country}</td>
                <td className="text-center">
                    <a onClick={()=>createNewBill(client)} href={href} >
                        <button disabled={disable} type="button" className="btn btn-success mx-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create New Bill">
                            <AiOutlineFileAdd/>
                        </button>
                    </a>
                    <a href="/editClient" onClick={()=>sendClientInfo(client)}>
                        <button type="button" className="btn btn-primary mx-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit Client Details">
                            <FaRegEdit/>
                        </button>
                    </a>
                    <button type="button" className="btn btn-danger mx-1" onClick={()=>removeClient(client.id)}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove Client">
                        <MdPersonRemoveAlt1/>
                    </button>
                </td>
                </tr>
                )
            }
        )
    };

    const createNewBill= (client)=>{
        if(localStorage.companyDetails)
            sendClientInfo(client);
        else
            alert("Fill your business details in Contact before creating a bill");
    };

    const sendClientInfo = (item) =>{
        const getClient = clientList.find((c) => c.id === item.id);
        const client = {
            id:getClient.id,
            name:getClient.name,
            nif:getClient.nif,
            phone:getClient.phone,
            address:getClient.address,
            country:getClient.country
        };
    localStorage.removeItem("editClient");    
    localStorage.setItem("editClient",JSON.stringify(client));
    };

    const removeClient = (id) => {
        const index = list.findIndex((it)=>it.id===id);
        list.splice(index,1);
        localStorage.setItem("clientsList",JSON.stringify(list));
        setClientList(list);
    };

    const clearStorage = ()=>{
        localStorage.clear();
        setClientList();
    };

    return (
        <BillsFrame>
            <div className="container gap-2 pt-3 justify-content-center col-11 col-md-10">
                <h1 className="header">CLIENTS LIST</h1>
                <div className="row justify-content-end py-2">
                    <a href="/NewClient" className="col-auto">
                        <button type="button" className="btn btn-success"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Client">
                            <MdPersonAddAlt1/>
                        </button>
                    </a>
                    <button type="button" className="col-auto btn btn-danger" onClick={()=>clearStorage()} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Clear LocalStorage">
                        Clear LocalStorage
                    </button>
                </div>
                    <Table className="row p-3 table-responsive">
                    {clientList ?
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                <th className="col-1" scope="col">Client</th>
                                <th className="col-2" scope="col">Name</th>
                                <th className="col-1" scope="col">NIF</th>
                                <th className="col-1" scope="col">Phone</th>
                                <th className="col-3" scope="col">Address</th>
                                <th className="col-1" scope="col">Country</th>
                                <th className="col-3" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                            {renderList()}
                        </tbody>
                        </table>
                        :
                        <div className='text-center no-data'>No clients storaged</div>
                    }
                    </Table>
                </div>
        </BillsFrame>
    );
};

export default ClientsListPage;

const Table = styled.div`
    background-color: rgb(255,255,255,0.7);
    border-radius: 10px;
`;