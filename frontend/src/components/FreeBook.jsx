import React from 'react'
import list from '../../public/lists.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
function FreeBook() {
    const filterData= list.filter((data)=> data.category==="Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    console.log(filterData);
  return (
    <>
    <div>
        <div className='max-w-screen-2xl container mx-auto md:px-20 sm:px-4 bg-slate-400 rounded-xl text-black'>
        <h1 className='font-bold my-5 py-4'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi odit rem soluta corrupti tenetur assumenda placeat iste, iure nihil quidem sunt! Blanditiis repellendus delectus deserunt.</p>
        <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item)=>{
          return <Cards item={item} key={item.id}/>
        })}
      </Slider>
    </div>
        </div>
        
    </div>
    </>
  )
}

export default FreeBook
