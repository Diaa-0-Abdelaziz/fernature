import React from 'react'
import Slider from "react-slick";
import img1 from "../../images/8a71dde55c25ef36671e25c975d58f1c.png"
import img2 from "../../images/c3da1581be19d569b56e6568261e346b.jpg"
import img3 from "../../images/3fd0aafa8d5ceed72ef97093aa7ee831.png"
import img4 from "../../images/best5.png"
import img5 from "../../images/best6.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Productslider() {
  function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div onClick={onClick}><i className="fa-solid fa-chevron-right position-absolute top-50 end-0 fs-3"></i></div>
      
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <>
      <div onClick={onClick}><i className="fa-solid fa-chevron-left position-absolute top-50 start-0 fs-3"></i></div>
      
      
      </>
    );
  }
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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





  let products = [
    {
      id:1,
      title:"new chair collection 2022",
      img:img1
    },
    {
      id:2,
      title:"lamp desk",
      img:img2
    },
    {
      id:3,
      title:"modern chair collection 2022",
      img:img3
    },
    {
      id:4,
      title:"new chair collection",
      img:img4
    },
    {
      id:5,
      title:"new chair collection",
      img:img5
    }
  ]



  return (
   <div className="container main-slider mb-5">
     <Slider {...settings}>
      {products.map((pro)=> <div className='p-2 content' key={pro.id} data-aos="flip-left">
        <div className='slider-pro p-1 overflow-hidden'>
      <div className=' ms-5 mt-3'>
      <p className='me-3 pb-0 text-capitalize'>{pro.title}</p>
      <button className=' text-uppercase'>shop now</button>
      </div>
      <img src={pro.img} alt="" className='w-100' />
    </div>
      </div>)}
  </Slider>
   </div>
  )
}
