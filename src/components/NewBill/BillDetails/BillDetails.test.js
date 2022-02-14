import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BillDetails from "./BillDetails";

test('renders content',()=>{
    const data = {
        client:{
            name:"Juan",
            nif:"98757612L",
            address:"Any Address",
            country:"Any Country",
            phone:"677123456"
        },
        id:"2",
        cod:"123",
        date:"12-03-2012"
    }

    const details = render(<BillDetails data={data} />);
    details.debug()
    //console.log(details);
    //details.getByText("Juan");

    //2 expect(details.container).toHaveTextContent(data.client.name);
})