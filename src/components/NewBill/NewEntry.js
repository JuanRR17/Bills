import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';
import {IoMdAddCircleOutline} from 'react-icons/io';
import * as Yup from 'yup';
import styled from 'styled-components';

const NewEntry = (props) => {
    const{
        articleList,
        handleSetArticleList,
        entryCounter,
        handleSetEntryCounter,
    } = props;

    const newEntry = (values,{resetForm}) =>{
        const totalValue=values.qty*values.price;
        handleSetArticleList([
            ...articleList,
            {
                id:entryCounter,
                description:values.description,
                qty:values.qty,
                price:values.price,
                total:totalValue
            }
        ])
        handleSetEntryCounter(entryCounter+1);
        resetForm();
    };
    const removeEntry = cod => {
        handleSetEntryCounter(entryCounter-1)

        handleSetArticleList(articleList.filter((item)=>item.id!==cod))
    };

    const validationSchema = Yup.object({
        description: Yup.string()
            .required("Please enter a Description"),
        qty: Yup.string()
            .required("Please enter a Quantity")
            .test('test', 'Quantity can only contain numbers', (value) => {
                var regExp = /[0-9]/g;
                return regExp.test(value);
              }),
        price: Yup.string()
        .required("Please enter a Price")
        .test('test', 'Price can only contain numbers', (value) => {
            var regExp = /[0-9]/g;
            return regExp.test(value);
        })
        });

    return (
            <Formik
            initialValues={{
                description:``,
                qty:``,
                price:``,
            }}
            validateOnChange={false}
            validateOnBlur={true}
            validationSchema={validationSchema}
            onSubmit={newEntry}
        >
        {({handleSubmit,setFieldValue}) => (
            <EntryContainer 
            className="container-fluid mx-0 px-0">
                <div  className="row mb-2 mb-sm-0 py-25 input-group align-items-center">
                    <div className="d-none d-sm-block col-1">
                        {articleList.length+1}
                    </div>
                    <Field name="description" className="col-7 col-sm-5 " />
                    <Field name="qty" className="col-2" 
                        onChange={(e) => {setFieldValue('qty',e.target.value)}}
                    />
                    <Field name="price" className="col-2 " 
                        onChange={(e) => {setFieldValue('price',e.target.value)}}
                    />

                    <button type="button" className="btn-close col-2 mx-2" onClick={()=>removeEntry(entryCounter)}
                          data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove"></button>
                    <button type="button" className="btn btn-success col-auto mx-2" onClick={handleSubmit}
                      data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add">
                        <IoMdAddCircleOutline/>
                    </button>
                </div>
                <ErrorMessage name="description" component="div" className="error" />
                <ErrorMessage name="qty" component="div" className="error" />
                <ErrorMessage name="price" component="div" className="error" />
                <ErrorMessage name="total" component="div" className="error" />
            </EntryContainer>
        )}
        </Formik>

    );
};

export default NewEntry;

const EntryContainer = styled.div`
    .error{
        color:red;
        font-size:15px;
    }
`;
