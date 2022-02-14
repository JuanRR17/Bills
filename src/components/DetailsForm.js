import React from 'react';
import { ErrorMessage, Field} from 'formik';
import styled from 'styled-components';

const DetailsForm = () => {
    return (
        <FormContainer className="row">
            <div className=" mt-3 col-md-8">
                <span className="col-auto" id="nombre">Name</span>
                <Field name="name" className="form-control" aria-label="Nombre" aria-describedby="nombre"/>
                <ErrorMessage name="name" component="div" className="error" />
            </div>
            
            <div className=" mt-3 col-md-4">
                <span className="col-auto" id="nif">NIF</span>
                <Field name="nif" className="form-control" aria-label="NIF" aria-describedby="nif"/>
                <ErrorMessage name="nif" component="div" className="error" />
            </div>
            <div className="mt-3">
                <span className="col-auto" id="direccion">Address</span>
                <Field name="address" className="form-control" aria-label="Direccion" aria-describedby="direccion"/>
                <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div className="mt-3 col-md-6">
                <span className="col-auto" id="pais">Country</span>
                <Field name="country" className="form-control" aria-label="pais" aria-describedby="pais"/>
                <ErrorMessage name="country" component="div" className="error" />
            </div>
            <div className="mt-3 col-md-6">
                <span className="col-auto" id="phone">Phone</span>
                <Field name="phone" className="form-control" aria-label="phone" aria-describedby="phone"/>
                <ErrorMessage name="phone" component="div" className="error" />
            </div>
        </FormContainer>
    );
};

export default DetailsForm;

const FormContainer = styled.div`
    color:white;
    .error{
        color:red;
        font-size:15px;
    }
    .field{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    }
`;