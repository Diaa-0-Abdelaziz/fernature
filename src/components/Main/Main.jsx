import React from 'react'
import { MdAttachMoney } from "react-icons/md";
export default function Main() {
  return (
    <>
     <main className=''>
    <div className='container row h-100'>
      <div className="col-md-6 d-flex p-5 flex-column align-items-center justify-content-center">
      <div className='content'>
      <p className=' text-uppercase'>interior</p>
      <h1 className=' text-capitalize'>home deasigns made easy</h1>
        <p className='salary'><MdAttachMoney/>416.00 <span>Starting</span></p>
        <button className=' text-uppercase'>shop now</button>
      </div>
      </div>
    </div>
   </main>
    </>
  )
}
