import React from 'react';
import img from '../../images/footer/location.png'
import logous from '../../images/logo/logo.png';
import { MdLocationOn , MdEmail} from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const ContactUs = () => {
    return (
        <div className="m-md-5 m-2 my-5">
            <h2  className="text-center my-5">Contact With Us</h2>
            <div className="row shadow my-md-5 mx-1">
                <div className="col-md-6 p-md-5 p-2">
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Your Email Address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Write Your Comment</label>
                
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <div className="text-end">
                <input type="Submit" className="btn btn-primary  px-3 fs-5 my-3 fw-bolder" />
                </div>
                </div>
                </div>
                <div className="col-md-6 col-12 p-0">
                <div id="footer-area-first" >
                <div id="footer-img" className="card border-0 bg-light  text-white">
                   <img src={img} id="contact-image" className="card-img p-md-5 p-0 m-0 opacity-25" alt="..."/>
                    <div className="card-img-overlay text-black p-md-5">
                        <img src={logous} alt=""  className="mb-3"/>
                        <p className="card-text fw-bolder my-md-3 ms-md-5 ms-1 my-3"><MdLocationOn/> <small>
                        350 Fifth Avenue, 34th floor, <br />
                        Gopalganj-8100,Bangladesh.
                        </small> </p>
                        <p className="card-text fw-bolder my-md-3 my-2 ms-md-5 ms-1"><small>
                        <BsFillTelephoneFill/> +8801874189806
                        </small> </p>
                        <p className="card-text fw-bolder my-md-3 my-2 ms-md-5 ms-1"><small>
                        <MdEmail/> mdhanif115825@gmail.com
                        </small> </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;