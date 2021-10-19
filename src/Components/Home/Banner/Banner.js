import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import image1 from '../../../images/banner/img-01.jpg'
const Banner = () => {
    return (
        <>
            <Carousel fade >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    id="banner-img"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div id="banner-text" className="col-md-8 col-12 text-md-start">
                                <h2 className="my-md-3">Sab'a Sanabill Hospital</h2>
                                <p className="mb-md-3 fs-6 fw-bolder ">A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.<span id="extra-text">
                                Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick 
                                    </span> </p>
                                <button type="button" className="btn btn-primary fs-6 fw-bolder">Take Service</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
        </>
    );
};

export default Banner;