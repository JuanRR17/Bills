import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import BackButton from '../components/Buttons/BackButton/BackButton';
import DetailsForm from '../components/DetailsForm';
import SaveButton from '../components/Buttons/SaveButton';
import { routes } from '../utils/pages';

const ContactPage = () => {
    const companyDetails = localStorage.companyDetails ? JSON.parse(localStorage.companyDetails) : "";

    const updateCompanyDetails = (values) => {

        localStorage.companyDetails=JSON.stringify({
            name:values.name,
            nif:values.nif,
            address:values.address,
            country:values.country,
            phone:values.phone
        });
    };

    const updateDetails = (values) =>{
        updateCompanyDetails(values);
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
                name:companyDetails?companyDetails.name:'',
                nif:companyDetails?companyDetails.nif:'',
                address:companyDetails?companyDetails.address:'',
                country:companyDetails?companyDetails.country:'',
                phone:companyDetails?companyDetails.phone:'',
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={validationSchema}
            onSubmit={updateDetails}
        >
        {({handleSubmit}) => (
            <BillsFrame>
                <div className="container col-9 d-grid gap-2 pt-2">
                    <h1 className="m-2 header">BUSINESS DETAILS</h1>
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

export default ContactPage;