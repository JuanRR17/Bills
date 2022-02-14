import React from 'react';
import {BsFillEyeFill} from 'react-icons/bs';

const ViewButton = (props) => {
    const {
        href,
        target,
        clickHandler
    }=props;
    return (
        <a href={href} target={target}>
            <button type="button" className="btn btn-primary m-1" onClick={clickHandler}
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="View Bill">
                <BsFillEyeFill/>
            </button>
        </a>
    );
};

export default ViewButton;
