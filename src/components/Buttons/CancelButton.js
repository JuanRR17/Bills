import React from 'react';
import {ImCancelCircle} from 'react-icons/im';

const CancelButton = (props) => {
    const{
        href,
    }=props;
    return (
        <a href={href}>
            <button type="button" className="btn btn-danger m-1"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cancel">
                <ImCancelCircle/>
            </button>
        </a>
    );
};

export default CancelButton;
