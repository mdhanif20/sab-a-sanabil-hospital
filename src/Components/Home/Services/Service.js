import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


import './Service.css';
const Service = (props) => {
    const {users} = useAuth();
    const {id,img1,details,service} = props.service;
    return (
        <>
           <div>
                <div className="col">
                    <div className="card h-100">
                    <img src={img1} className="card-img-top" id="service" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service}</h5>
                        <p className="card-text">{details.slice(0,260)}.</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        {
                        users.email? <div>
                            <Link to={`/details/${id}`}>
                            <button className="btn btn-primary fw-bolder">Show Details</button>
                            </Link>
                            </div>:
                            <div>
                                <Link to={`/login`}>
                                <button className="btn btn-primary fw-bolder">Show Details</button>
                                </Link>
                            </div>
                        }
                        {
                        users.email? <div>
                            <Link to={`/contact`}>
                            <button className="btn btn-warning text-white fw-bolder">Take This Service</button>
                            </Link>
                            </div>:
                            <div>
                                <Link to={`/login`}>
                                <button className="btn btn-warning text-white fw-bolder">Take This Service</button>
                                </Link>
                            </div>
                        }
                    </div>
                    </div>
                </div>  
                </div>
        </>
    );
};

export default Service;