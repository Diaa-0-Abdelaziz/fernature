import React from 'react'
import img1 from "../../images/Group2.png"
import img2 from "../../images/Group3.png"
import img3 from "../../images/Group1.png";
import img4 from "../../images/Group4.png"
export default function Features() {

    let features =[
        {
            id:1,
            img:img1,
            header:"Free Shipping",
            text:"Capped at $319 per order",
        }, 
        {
            id:2,
            img:img2,
            header:"Free Returns",
            text:"Within 25 Days",
        },
        {
            id:3,
            img:img3,
            header:"100% Secure",
            text:"100% Secure payment",
        },
        {
            id:4,
            img:img4,
            header:"Best Price",
            text:"Guaranteed Gifts",
        }
    ]
  return (
    <>
    <section className="features container my-5 p-3">
       <div className="row">
       {features.map((feature)=>
        <div key={feature.id} className={feature.id === 4? `col-md-3 d-flex align-items-center justify-content-center` : `content col-md-3 d-flex align-items-center justify-content-center`}>
        <img src={feature.img} alt="" />
        <ul className='list-unstyled mt-3 ms-3'>
            <li>{feature.header}</li>
            <li>{feature.text}</li>
        </ul>
    </div>
       )}
        



       </div>
    </section>
    </>
  )
}
