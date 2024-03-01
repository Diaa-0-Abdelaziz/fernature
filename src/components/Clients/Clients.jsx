import React,{useEffect} from 'react'
// import bgSection from '../../images/back2.jpg';
import human1 from '../../images/human1.png';
import human2 from '../../images/human2.png';
import human3 from '../../images/human3.png';
import human4 from '../../images/human4.png';
import { RiStarSFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Clients() {
  useEffect(() => {
    
    AOS.init({
      duration:2000
    })
  }, [])



    let clients = [
        {
            id:1,
            name:"Bessie Cooper",
            jop:"Communications Director",
            photo:human2,
            descrip:"I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
          },
        {
          id:2,
          name:"Anjelina Jolie",
          jop:"Sales Manager",
          photo:human3,
          descrip:"I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
        },
        {
            id:3,
            name:"Brooklyn Simmons",
            jop:"Public Relations Specialist",
            photo:human1,
            descrip:"I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
          },
        {
          id:4,
          name:"Bessie Cooper",
          jop:"Communications Director",
          photo:human4,
          descrip:"I Have Gotten At Least 50 Times The Value From Surely. After Using Surely My Business After Skyrocketed Heaven To Delhi"
        }
      ]
  return (
    <>
    <div className='clients text-center pt-3 pb-5'>
       <p className='ques mt-5'>what people say</p>
       <h1 className=''>words of our clients</h1>
       <div className="container pt-5 mt-5">
        <div className="row">
           {clients.map((client)=>
            <div data-aos="zoom-in" key={client.id} className="col-md-3 col-sm-6 my-5">
            <article className='position-relative'>
             <div className="image overflow-hidden position-absolute rounded-circle start-50 translate-middle">
                <img src={client.photo} alt="" className=' w-75'/>
             </div>
             <h3 className='text-capitalize'>{client.name}</h3>
             <p className='jop'>{client.jop}</p>
             <div className="rating">
                 <span><RiStarSFill/></span> 4.0
             </div>
             <p className='explane'>{client.descrip}</p>
            </article>
        </div>
           )}
        </div>
       </div>
    </div>
    </>
  )
}
