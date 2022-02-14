import React from 'react';
import BillsFrame from '../components/BillsFrame/BillsFrame';
import { Link } from 'react-router-dom';
import { routes } from '../utils/pages';

const NotFoundPage = () => {
    return (
        <BillsFrame title="Not Found">
            Not Found
            <div>
                <Link to={routes.clientsList}>Go to Clients List</Link>
            </div>
        </BillsFrame>
    );
};

export default NotFoundPage;
