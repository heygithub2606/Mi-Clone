
import React from 'react'
import { Carousel, CarouselItem, CarouselCaption } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ banner }) => {
    return (
        <Carousel fade>
            {banner.end.map((item, index) => (
                <CarouselItem key={index} interval={1000}>
                    <img
                        className='d-block w-100'
                        src={item.image}
                        alt={`Banner ${index}`}
                    />
                    <CarouselCaption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{item.source}</p>
                        <u>Read More</u>
                    </CarouselCaption>
                </CarouselItem>
            ))}
        </Carousel>
    );
};

export default Banner;
