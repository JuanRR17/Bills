import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import BackButton from '../components/Buttons/BackButton/BackButton';
import DetailsForm from '../components/DetailsForm';
import SaveButton from '../components/Buttons/SaveButton';
import { routes } from '../utils/pages';

const EditClientPage = () => {
    const client = JSON.parse(localStorage.editClient);
 
    const updateClientsList = (values) => {

        const editedClient = {
            id:values.id,
            name:values.name,
            nif:values.nif,
            address:values.address,
            country:values.country,
            phone:values.phone,
        };
        const originalClientsList = JSON.parse(localStorage.clientsList);
        const index = originalClientsList.findIndex((it)=>it.id===client.id);
        originalClientsList.splice(index,1,editedClient);
        const newClientsList=originalClientsList;
        localStorage.setItem("clientsList",JSON.stringify(newClientsList));
    };

    const editClient = (values) =>{
        updateClientsList(values);
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Mandatory field")
            .test('test', 'Hacen falta letras', (value) => {
                var regExp = /[a-zA-Z]/g;
                return regExp.test(value);
              }),
        nif: Yup.string()
            .required("Mandatory field"),
        address: Yup.string()
        .required("Mandatory field"),
        country: Yup.string()
        .required("Mandatory field"),
        phone:Yup.string()
        .required("Mandatory field")
        .test('test', 'Solo puede introducir números', (value) => {
        var regExp = /[0-9]/g;
        return regExp.test(value);
      }),
        });

    return (
        <Formik
            initialValues={{
                id:client.id,
                name:client.name,
                nif:client.nif,
                address:client.address,
                country:client.country,
                phone:client.phone,
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={validationSchema}
            onSubmit={editClient}
        >
        {({handleSubmit}) => (
            <BillsFrame>
                <div className="container mt-3">
                    <h1 className="header m-2">Edit Client Details</h1>
                    <DetailsForm />
                    <div className="row mt-2 justify-content-center">
                        <div className="col-auto">
                            <SaveButton clickHandler={handleSubmit}/>
                            <BackButton href={routes.clientsList}/>
                        </div>
                    </div>
                </div>
            </BillsFrame>
            )}
        </Formik>
    );
};

export default EditClientPage;

const Header=styled.div`
    text-align:center;
    font-family: 'Alfa Slab One', cursive;
`;
