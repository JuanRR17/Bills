import React from 'react';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import { Link } from 'react-router-dom';
import { routes } from '../utils/pages';
import styled from 'styled-components';

const NotFoundPage = () => {
    return (
        <BillsFrame title="Not Found">
            <NotFoundContainer >
            Page Not Found
                <div>
                    <Link to={routes.clientsList}>Go to Clients List</Link>
                </div>
            </NotFoundContainer>
        </BillsFrame>
    );
};

export default NotFoundPage;

const NotFoundContainer = styled.div`
    color:white;
    text-align:center;
    padding:50px;
    font-size:30px;
    a{
        color:white;
    }
`;