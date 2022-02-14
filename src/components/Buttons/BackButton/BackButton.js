import React from 'react';
import {RiArrowGoBackFill} from 'react-icons/ri';

const BackButton = (props) => {
    const {
        href
    }=props;
    return (
        <a href={href}>
            <button type="button" 
            className="btn btn-primary m-1"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back">
                <RiArrowGoBackFill/>
            </button>
        </a>
    );
};

export default BackButton;
