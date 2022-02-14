import React from 'react';
import {RiSave3Fill} from 'react-icons/ri';

const SaveButton = (props) => {
    const{
        href,
        clickHandler
    } = props;
    
    return (
        <a href={href}
            type="button" 
            className="btn btn-success m-1"
            onClick={clickHandler}
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Save">
            <RiSave3Fill/>
        </a>
    );
};

export default SaveButton;
