import React, {useState,useEffect} from 'react';
import {Formik } from 'formik';
import * as Yup from 'yup';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import BackButton from '../components/Buttons/BackButton/BackButton';
import DetailsForm from '../components/DetailsForm';
import SaveButton from '../components/Buttons/SaveButton';
import { routes } from '../utils/pages';

const NewClientPage = () => {
    const init = Number(localStorage.clientID);
    const clientIDinLocalStorage = init ? init : 1;

    const [clientCounter, setClientCounter] = useState(clientIDinLocalStorage);

    const clientIDCreator = (num,size) =>{
        num = num.toString();
        while (num.length < size)
            {num="0"+num;}
        num = "CL"+num;
        return num;
    }

    useEffect(() => {
    }, [clientCounter]);

    const updateClientsList = (values) => {
        setClientCounter(clientCounter);
        const clientID = clientIDCreator(clientCounter,4); 

        const newClient = {
            id:clientID,
            name:values.name,
            nif:values.nif,
            phone:values.phone,
            address:values.address,
            country:values.country,
        };

        var clientList=[];

        if(localStorage.clientsList){
            const originalClientList = JSON.parse(localStorage.clientsList);
            clientList=[...originalClientList, newClient];
        }else{
            clientList=[newClient];
        }        
        
        localStorage.setItem("clientsList",JSON.stringify(clientList));
        localStorage.setItem("clientID",JSON.stringify(clientCounter+1));
    }

    const addClient = (values,{resetForm}) =>{
        updateClientsList(values);
        resetForm();
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Mandatory field")
            .test('test', 'Please enter letters', (value) => {
                var regExp = /[a-zA-Z]/g;
                return regExp.test(value);
              }),
        nif: Yup.string()
            .required("Mandatory field")
            .test('test', 'NIF must have 8 numbers and an uppercase letter', (value) => {
                var regExp = /^[0-9]{8}[A-Z]{1}/g;
                return regExp.test(value);
              }),
        address: Yup.string()
        .required("Mandatory field"),
        country: Yup.string()
        .required("Mandatory field"),
        phone:Yup.string()
            .min(9,"Must have a minimum of 9 numbers")
            .required("Mandatory field")
            .test('test', 'Only numbers are allowed', (value) => {
            var regExp = /[0-9]/g;
            return regExp.test(value);
          }),
        });

    return (
        <Formik
            initialValues={{
                name: '',
                nif:'',
                address:'',
                country:'',
                phone:'',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={validationSchema}
            onSubmit={addClient}
        >
        {({handleSubmit}) => (
            <BillsFrame>
                <div className="container mt-3 col-9">
                    <h1 className="header m-2">New Client</h1>
                    <DetailsForm />
                    <div className="row mt-2 justify-content-center">
                        <div className="col-auto">
                            <SaveButton clickHandler={handleSubmit}/>
                            <BackButton  href={routes.clientsList}/>
                        </div>
                    </div>
                </div>
            </BillsFrame>
            )}
        </Formik>
    );
};

export default NewClientPage;
