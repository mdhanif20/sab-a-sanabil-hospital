import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AiFillStar } from "react-icons/ai";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import './ServiceDetails.css';
import { Link } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    // const getNumber = parseFloat(serviceId);
    const [services,setServices] = useState([]);
    const [details,setDetails] = useState({});
    useEffect(()=>{
        fetch("/detailsData.JSON")
        .then(res => res.json())
        .then(data => setServices(data.Services))
    },[])
    useEffect(()=>{
       const findDetails = services.find(service => service.id === parseFloat(serviceId));
       setDetails(findDetails);
    },[services])
    return (
        <div className="card mb-3 my-5 m-auto p-md-5 p-2 rounded" id="details">
        <div className="row g-0">
            <div className="col-md-4">
            <div>
                    <img className="w-100" src={details?.img1} alt="" />
                </div>
                <div id="top-details-img" className="">
                    <div>
                        <img className="w-100 h-100" src={details?.img2} alt="" />
                    </div>
                    <div>
                        <img className="w-100 h-100" src={details?.img3} alt="" />
                    </div>
                </div>
            </div>
            <div className="col-md-8">
            <div className="card-body pt-md-0">
                <h2 className="card-title">{details?.service}</h2>
                <p className="card-text">{details?.details} <Link to="/home"><button type="button" className="btn btn-link">back to home page</button></Link> </p>
                <p className="card-text"><small className="text-muted">This Types Of Treatment Taken Total {details?.totalPasent} patient</small></p>
                <strong> <span>Our Success Rate This Sector Is: {details?.successRaie}%</span> <span className="ms-5"><AiFillStar/>{details?.raiting}</span></strong>
                <p  className="pt-3"> <span>Total Cost For This Service Around: <HiOutlineCurrencyBangladeshi/> {details?.coust}</span></p>
                <p className="text-white text-bolder">
                <span>
                    <button type="button" className="btn btn-warning me-3 text-white fw-bolder">Take This Service</button>
                        
                </span>
                <span>
                     <button type="button" className="btn btn-primary text-white fw-bolder mt-md-0 mt-3">Contact With Us</button>
                </span>
               
                </p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ServiceDetails;