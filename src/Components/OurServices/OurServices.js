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
                    <p className="card-text">{service.details.slice(0,250)}
                    
                        Subject:  "Application for the post of web developer", Mohammad Hanif
                        Dear Sir/Madam,
                        In response to your advertisement published on bdjobs.com/Linkedin on December 04,2021. I am writing to apply for the position of  Web developer in Programming Hero. My qualification are closely matching with the job responsibilities mentioned in the advertisement.
                        
                        i am expertise in HTML5,CSS3,Bootstrap 5, JavaScript + ES6, React, React Router, React Bootstrap and comfortable with Node js, Express js, MongoDB, Tailwind CSS,  Firebase.
                        I have attached my resume, which highlights my skills and qualifications for this job.
                       {/*  Please find my attached resume for more details.
                        I look forward to hearing from you. */}

                        I assure you that i will be a valuable asset to your prestige company. Than you in advance for reviewing my Application email and resume. You may reach me at +8801609015767
                        Regards,
                        Mohammad Hanif
                        {/* Mobile Number: +8801609015767 */}
                        Email: mdhanif115825@gmail.com

                    </p>
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