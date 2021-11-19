import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleTravelPackage from '../SingleTravelPackage/SingleTravelPackage';
import './TravelPackages.css';

const TravelPackages = () => {
    const [tourPackage, setTourPackage] = useState([])
    useEffect(() => {
        fetch('https://murmuring-bastion-29121.herokuapp.com/plans')
            .then(res => res.json())
            .then(data => setTourPackage(data));
    }, [])

    return (
        <Container id="services">
            <h2 className="text-primary mt-5">Popolar Travel Plans</h2>
            <div className="service-container">
                {
                    tourPackage.map(tourPackage => <SingleTravelPackage
                        Key={tourPackage._id}
                        tourPackage={tourPackage}
                    >

                    </SingleTravelPackage>)

                }
            </div>
        </Container>
    );
};

export default TravelPackages;