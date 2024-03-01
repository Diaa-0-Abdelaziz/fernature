import React,{useEffect} from 'react'
import Slider from "react-slick";
import { FaRegUser } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import img1 from "../../images/article1.jpg"
import img2 from "../../images/article2.jpg"
import img3 from "../../images/article3.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Articles() {
  useEffect(() => {
    AOS.init({
      duration:2000
    })
  }, [])
  
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
    
    
    
    
    
      let articles = [
        {
          id:1,
          username:"Johan Doe",
          comments:"9 Comments",
          title:"Things to Know When Choosing the Perfect Sofa",
          img:img1,
          dateOfNum:"05",
          dateOfDay:"May"
        },
        {
          id:2,
          username:"Johan Doe",
          comments:"3 Comments",
          title:"Things to Know When Choosing the Perfect Sofa",
          img:img2,
          dateOfNum:"23",
          dateOfDay:"Jun"
        },
        {
          id:3,
          username:"Johan Doe",
          comments:"6 Comments",
          title:"Things to Know When Choosing the Perfect Sofa",
          img:img3,
          dateOfNum:"15",
          dateOfDay:"May"
        }
      ]
  return (
    <>
      <div className="container main-slider mb-5">
     <Slider {...settings}>
      {articles.map((article)=>
        <div data-aos="zoom-in-down" key={article.id} className='articles p-2'>
        <img src={article.img} className="card-img-top" alt="..."/>
        <div className="card-body p-3 border-2 rounded-0 card position-relative">
            <div className='date position-absolute'>
               <h6>{article.dateOfNum}</h6>
               <h6>{article.dateOfDay}</h6>
            </div>
            <ul className=' list-unstyled mt-4 d-flex'>
                <li className='mx-3'><span><FaRegUser/></span> {article.username}</li>
                <li><span><FaRegMessage/></span> {article.comments}</li>
            </ul>
            <p className="card-text">{article.title}</p>
            <button className='text-uppercase'>shop now</button>
        </div>
        </div>
      
      )}
  </Slider>
   </div>
    </>
  )
}
