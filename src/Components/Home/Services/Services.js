import React from 'react';
import useServices from '../../hooks/FakeDatak/fakeData';
import Service from './Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="text-center mt-5">
            <div>
                <h2>Our Services</h2>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-3 mx-md-5 mx-2">
            {
                services.map(service => 
                     <Service key={service.id} service={service}></Service>
                     )
            }
            </div>
        </div>
       
    );
};

export default Services;