import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/notFound/Screenshot_1.png'
const NotFound = () => {
    return (
        <div className="text-center">
            <h2 className="py-5">Page Not Found 404</h2>
            <img src={img} alt="" />
            <div>
            <Link to="/home">
                <button type="button" className="btn btn-primary">Back To Home Page</button>
            </Link>
            </div>
        </div>
    );
};

export default NotFound;