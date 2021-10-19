import React from 'react';
import useServices from '../hooks/FakeDatak/fakeData';
import './OurServices.css';
const OurServices = () => {
    const [services] = useServices();
    return (
       <div>
            <h2 className="text-center mt-5">Our services</h2>
        <div id="services" className="card-group my-5 mx-md-5 mx-3">
            {
                services.map(service => 
                    <div key={service.id} className="card">
                        {
                            console.log(service)
                        }
                    <img src={service.img2} className="card-img-top w-100 h-100" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{service.service}</h5>
                    <p className="card-text">{service.details.slice(0,250)}</p>
                    <p className="card-text"><small className="text-muted">Our Success Rate is {service.successRaie}</small></p>
                    </div>
                </div>
                )
            }
        </div>
       </div>
    );
};

export default OurServices;