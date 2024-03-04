import React from 'react'
import img1 from "../../images/logo.svg"
export default function Subscripe() {
  return (
    <>
    <section className=' container subscripe d-flex flex-column align-items-center'>
     <img src={img1} alt="" />
     <h4>Join Now For Early Access</h4>
     <p>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit</p>
     <div className='form row w-100 p-3 justify-content-center'>
           <div className="col-md-5 mb-3">
            <input type="email" placeholder='Enter your email address...'/>
           </div>
        <div className='col-md-2'><span>subscripe</span></div>
     </div>
    </section>
    </>
  )
}
