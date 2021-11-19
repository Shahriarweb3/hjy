import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/slide_1.jpg';
import banner2 from '../../../images/banner/slide_2.jpg';
import banner3 from '../../../images/banner/slide_3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ width: '100%', height: '400px' }}

                        src={banner1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: '100%', height: '400px' }}
                        src={banner2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ width: '100%', height: '400px' }}
                        src={banner3}
                        alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>


        </>
    );
};

export default Banner;