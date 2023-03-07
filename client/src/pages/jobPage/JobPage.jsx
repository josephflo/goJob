import React from "react";
import { useSelector } from "react-redux";
import JobCard from "./jobCard/JobCard";
import Slider from "react-slick"

/******************* */
import "./jobCard/cssSlick/slick-theme.css"
import "./jobCard/cssSlick/slick.css"

export default function JobPage() {
  const jobs = useSelector((state) => state.jobs);

  let profesionales = jobs.slice(0,10)

  /*************************************** */
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2800,
    pauseOnHover: true,
    centerPadding: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },

      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },

      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          swipe: true
        }
      }
    ]
  };


  return (
    <div className="items-center justify-center">
      <h1 className=" text-5xl text-black mx-auto pt-20 text-center">
        ¿Qué es lo que buscas?
      </h1>

      <div className="container_slick_fray">
        <Slider {...settings}>
          {profesionales?.length > 0 ? (profesionales?.map((e) => {
                  return (
                    <JobCard
                      id={e.id}
                      key={e.id}
                      name={e.name}
                      description={e.description}
                    />
                  );
                })
              ) : (
                <p>ups! no hay oficios</p>
          )}
        </Slider>
      </div>


    </div>
  );
}
