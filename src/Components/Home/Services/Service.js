import React from 'react';
import './Service.css';
const Service = (props) => {
    const {img1,details,service} = props.service;
    return (
        <>
           <div>
                <div className="col">
                    <div className="card h-100">
                    <img src={img1} className="card-img-top" id="service" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{service}</h5>
                        <p className="card-text">{details.slice(0,250)}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        
                            <button className="btn btn-primary fw-bolder">Show Details</button>
                        
                        
                        <button className="btn btn-warning text-white fw-bolder">Take This Service</button>
                    </div>
                    </div>
                </div>  
                </div>
        </>
    );
};

export default Service;