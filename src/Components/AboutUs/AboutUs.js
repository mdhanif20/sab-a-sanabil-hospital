import React from 'react';
import img2 from '../../images/hospitalimg/img2.jpg'
import img4 from '../../images/hospitalimg/img4.jpg'
import img7 from '../../images/hospitalimg/img8.jpg'
import img8 from '../../images/hospitalimg/img9.jpg'
import img9 from '../../images/hospitalimg/img5.jpg'
import './AboutUs.css';
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className=" m-auto my-5" id="about-area">
            <div className="row">
                <div className="col-md-6 p-0">
                 <img src={img2} className="w-100 h-100 " alt="" />
                </div>
                <div className="col-md-6 p-0">
                <img src={img7} className="w-100 h-100 p-0" alt="" />
                </div>
                <div className="col-12 p-0" id="img-bottom">
                <img src={img4} className="w-100 h-100 p-0" alt="" />
                <img src={img8} className="w-100 h-100 p-0" alt="" />
                <img src={img9} className="w-100 h-100 p-0" alt="" />
                </div>
               
            </div>
            <div className="row my-5 px-3">
            <div className="col-md-6">
                   <h2 className="border-bottom mb-5 pb-3">Sab'a Sanabill Hospitall</h2> 
                   
                   <p>
                   A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.[1] The best-known type of hospital is the general hospital,  which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness.<br /><br /> A district hospital <strong>typically is the major health care facility in its region, with many beds for intensive </strong> care and additional beds for patients who need long-term care. Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, seniors' <br /> (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain<br /><br /> disease categories. Specialized hospitals can help reduce health care costs compared to general
                    <a href="#">hospitals</a> .[2] Hospitals are classified as general, specialty, or government depending on the sources of income received.

                    A teaching hospital combines assistance to people with teaching to medical students and nurses <strong> A medical facility smaller than a hospital </strong> .is generally called a clinic. Hospitals have a range of departments (e.g. surgery and urgent care) and specialist units such as cardiology. Some hospitals have outpatient departments and some have chronic treatment units. Common support units include a pharmacy, pathology, and radiology.
                        <br /> <br />
                    Hospitals are typically funded by public funding, health organisations (for-profit or nonprofit), health insurance companies, or charities, including direct charitable donations. Historically, hospitals were often founded and funded by religious orders, or by charitable individuals and leaders.[3]
                    <br />
                   
                   </p>
                </div>
                <div className="col-md-6">
                    <p>
                    <strong> Currently, hospitals are largely staffed by professional physicians, surgeons, nurses,</strong> and allied health practitioners, whereas in the past, this work was usually performed by the members of founding religious orders or by volunteers. However, there are various Catholic <br /> <br /> religious orders, such as the Alexians and the Bon Secours Sisters that still focus on hospital ministry in the late 1990s, as well as several other Christian denominations, including the Methodists and Lutherans, which run hospitals.[4] In accordance with the original meaning of the word, hospitals were original <a href="#">places of hospitality</a> , and this meaning is still preserved in the names of some institutions such as the Royal Hospital Chelsea, established in 1681 as a retirement and nursing home for veteran soldiers. <br /> <br />

                    During the Middle Ages, hospitals served different functions from modern institutions in that they were almshouses for the poor, hostels for pilgrims, or hospital schools. The word "hospital" comes from the Latin hospes, signifying a stranger or foreigner, hence a guest. Another noun derived from this, hospitium came to <br /> <br /> signify hospitality, that is the relation between guest and shelterer, hospitality, friendliness, and hospitable reception. <strong>By metonymy, the Latin word then came to</strong>  mean a guest-chamber, guest's lodging, an inn.[5] Hospes is thus the root for the English words host (where the p was dropped for convenience of pronunciation) hospitality, hospice, hostel, and hotel. The latter modern word derives from Latin via the Old French romance word hostel, which developed a silent s, which letter was eventually removed from the word, <br /> <br /> the loss of which is signified by a circumflex in the modern French word hôtel. The German word Spital shares similar roots.
                    </p>
                    <div className="text-end">
                        <Link to="/home">
                            <button className="btn btn-primary">Show Details</button>
                        </Link>
                     </div>
                </div>
                
            </div>
        </div>
    );
};

export default AboutUs;