
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/image 1.png'



const ImageSlider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
  
    useEffect(() => {
      // Update the slider index every 3 seconds
      const interval = setInterval(() => {
        setSliderIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const slides = [
      {
        id: 1,
        imageUrl: image1,
        altText: 'Image 1',
      },
      {
        id: 2,
        imageUrl: image1,
        altText: 'Image 2',
      },
      {
        id: 3,
        imageUrl: image1,
        altText: 'Image 3',
      },
      {
        id: 4,
        imageUrl: image1,
        altText: 'Image 4',
      },
      // Add more slide objects as needed
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <Slider {...settings} beforeChange={(current, next) => setSliderIndex(next)}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex text-center" >
            <img src={slide.imageUrl} alt={slide.altText} className=" object-contain  h-auto" />
          </div>
        ))}
      </Slider>
    );
  };

  export default ImageSlider;
  