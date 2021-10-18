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
                                <h3>Sab'a Sanabill Hospital</h3>
                                <p>A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.</p>
                                <button type="button" className="btn btn-primary fs-6">Take Service</button>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>  
        </>
    );
};

export default Banner;