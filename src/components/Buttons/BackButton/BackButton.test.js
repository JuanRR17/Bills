import React from 'react';
import { render, screen } from '@testing-library/react';
import BackButton from './BackButton'; //SUT: Subject under testing
import '@testing-library/jest-dom/extend-expect';

test("BackButton receives the link correctly", async () =>{
    //AAA
    //Arrange
    //Act
    const path = "/prueba";

    render(<BackButton href={path}/>);

    //Assert
    expect(screen.getByRole('link')).toHaveAttribute('href', path);
})