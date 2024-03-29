import React,{useEffect} from 'react';
import { SlRefresh } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { RiStarSFill } from "react-icons/ri";
import img1 from "../../images/best1.png"
import img2 from "../../images/best2.png"
import img3 from "../../images/best3.png";
import img4 from "../../images/best4.png"
import img5 from "../../images/best5.png"
import img6 from "../../images/best6.png"
import img7 from "../../images/best7.png"
import img8 from "../../images/best8.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function ProfessionalTeam() {
  useEffect(() => {
    
    AOS.init({
      duration:2000
    })
  }, [])
  
    let products = [
        {
          id:1,
          title:"Coral vase",
          oldPrice:20,
          newPrice:12,
          img:img1
        },
        {
          id:2,
          title:"Blue chair",
          oldPrice:15,
          newPrice:12,
          img:img2
        },
        {
          id:3,
          title:"Decorative vase",
          newPrice:25,
          img:img3
        },
        {
          id:4,
          title:"Blue chair",
          oldPrice:20,
          newPrice:15,
          img:img4
        },
        {
          id:5,
          title:"Coffe table set",
          newPrice:15,
          img:img5
        },
        {
          id:6,
          title:"Black chair",
          oldPrice:20,
          newPrice:15,
          img:img6
        },
        {
          id:7,
          title:"Gray sofa",
          oldPrice:20,
          newPrice:15,
          img:img7
        },
        {
          id:8,
          title:"Coral vase",
          newPrice:15,
          img:img8
        }
      ]
  return (
    <>
    <div className="container mt-5 professional-team">
        <p>professional team</p>
        <div className='d-flex flex-wrap justify-content-between align-items-center'>
        <h3 className=' text-capitalize'>the best new arrivals</h3>
        <ul className=' list-unstyled d-flex flex-wrap justify-content-between rooms'>
            <li className='active'>desk</li>
            <li>bedroom</li>
            <li>lighting</li>
            <li>accessories</li>
        </ul>
        </div>
        <div className="row">
            {products.map((pro)=>
            <div key={pro.id} className="col-md-3 col-sm-6 mb-3" data-aos="fade-in">
            <div className="main-cart">
            <div className='image' >
            <img src={pro.img} className="h-100 w-100" alt="..." />
            </div>
            <div className="card-body">
                <div className="btns">
                    <ul className='list-unstyled d-flex justify-content-center rooms'>
                        <li><SlRefresh /></li>
                        <li><CiHeart /></li>
                        <li><BsCart3 /></li>
                    </ul>
                </div>
                <h5 className="card-title mb-3">{pro.title}</h5>
                 <div className=' d-flex justify-content-between flex-wrap'>
                    <ul className='list-unstyled d-flex price'>
                        {pro.oldPrice? <li className='old text-decoration-line-through me-2'><MdAttachMoney/>{pro.oldPrice}.00</li> : ''}
                        <li><MdAttachMoney/>{pro.newPrice}.00</li>
                    </ul>
                    <ul className=' list-unstyled d-flex stars'>
                        <li><RiStarSFill/></li>
                        <li><RiStarSFill/></li>
                        <li><RiStarSFill/></li>
                        <li><RiStarSFill/></li>
                        <li><RiStarSFill/></li>
                    </ul>
                 </div>
            </div>
            </div>
            </div>
            )}
        </div>
    </div>
    </>
  )
}
