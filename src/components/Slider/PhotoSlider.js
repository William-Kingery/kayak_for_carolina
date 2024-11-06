import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './PhotoSlider.scss';

// Images 
import image1 from "../../assets/images/general/1.png";
import image3 from "../../assets/images/general/3.png";
import image4 from "../../assets/images/general/4.png";
import image5 from "../../assets/images/general/5.png";
import image6 from "../../assets/images/general/6.png";
import image7 from "../../assets/images/general/7.png";
import image8 from "../../assets/images/general/8.png";
import image9 from "../../assets/images/general/9.png";
import image10 from "../../assets/images/general/10.png";

const PhotoSlider = () => {

   const images = [
      { src: image1, alt: "Kayaking at sunset" },
      { src: image3, alt: "Sunset over dunes" },
      { src: image4, alt: "Kayak in the marsh at sunrise" },
      { src: image5, alt: "One large shark tooth" },
      { src: image6, alt: "Multiple people kayaking" },
      { src: image7, alt: "Kayaking at sunset" },
      { src: image8, alt: "Three people kayaking" },
      { src: image9, alt: "Many shark teeth" },
      { src: image10, alt: "One large shark tooth" },
   ];

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1, 
      responsive: [
         {
            breakpoint: 1024, 
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 768, 
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 480, 
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <Slider {...settings}>
         {images.map((image, index) => (
            <div className="slider" key={index}>
               <img src={image.src} alt={image.alt} className="slider__image" />
            </div>
         ))}
      </Slider>
   );
};

export default PhotoSlider;

