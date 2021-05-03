import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="container d-flex">
            <div className="row align-items-center">
                <div className="col-md-5 col-sm-6">
                    <h1 style={{ color: '#3A4256' }}>Your New Smile <br /> Starts Here</h1>
                    <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                    <Link to="/appointment" className="btn btn-brand">GET APPOINTMENT</Link>
                </div>
                <div className="col-md-7 col-sm-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;