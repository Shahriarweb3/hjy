import React, { useEffect } from 'react';
import './SingleTravelPackage.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'


const SingleTravelPackage = ({ tourPackage }) => {
    useEffect(() => {
        AOS.init();
    }, [])

    // const {service} = props;
    const { _id, name, price, description, img } = tourPackage;
    return (
        <div className="service pb-3" data-aos="fade-up"
            data-aos-duration="3000">
            <img data-aos="zoom-in" data-aos-duration="3000" src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default SingleTravelPackage;