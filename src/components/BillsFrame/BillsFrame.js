import React from 'react'; 
import PropTypes from 'prop-types';   
import styled from 'styled-components';
import { routes } from '../../utils/pages';

const Bills = (props) => {  
    const{ 
        children
    } = props;
    document.title = "Bills";
    return (
        <Background> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <ul className="navbar-nav row p-1">
                        <li className="nav-item col my-1">
                            <a className="nav-link active" aria-current="page" href={routes.billsList}>Bills</a>
                        </li>
                        <li className="nav-item col my-1">
                            <a className="nav-link active" aria-current="page" href={routes.clientsList}>Clients</a>
                        </li>
                        <li className="nav-item col my-1">
                            <a className="nav-link active" aria-current="page" href={routes.contact}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div>
                {children}
            </div>
        </Background>
    );
};

Bills.propTypes = {
    children: PropTypes.node
};

export default Bills;

const Background = styled.div`
    position: absolute;
    top:0px;
    bottom:0;
    left:0;
    right:0;
    .navbar{
        text-align:center;
        font-size:25px;
        border-bottom: 2px solid white;
        padding:0; 
        a{
            width:150px;
            background-color:rgb(127, 172, 173);
            border:2px solid rgba(2, 53, 87);
        }       
        .container-fluid{
            background-color:cadetblue;
            padding:0;
            margin:0;
            .nav-link{
                padding:0px;
                display:inline-block;
                border-radius:8px;
            }
            .navbar-toggler{
                z-index:3;
                background-color:white;
            }
            .navbar-collapse{
                margin:0;
            }
            .navbar-nav{
                width:100%;
            }
            .navbar-nav .nav-link.active, .show>.nav-link {
                color: rgba(0,0,0);
                font-family: "Roboto+Serif";
                :hover{
                    text-decoration: none;
                    transform: scale(1.1,1.1);
                    background-color:rgb(51, 115, 117);
                }
            }
        }
    }
`;
