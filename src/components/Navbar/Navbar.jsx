import React,{useState, useEffect} from 'react'
import { CgMenuGridR } from "react-icons/cg";
import'./Navbar.css'
import logo from '../../images/Group 2.svg'
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { AiFillCloseSquare } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState("link")
  function openWindow(){
    setOpen("link toggle")
  }
  function closeWindow(){
    setOpen("link")
  }

  
  return (
   <>
   <div className="navbar fixed-top py-1 px-5">
   {/* <div className=' w-100 py-1 px-5  d-flex '> */}
   <div className='icon'>
     <img src={logo} alt="" />
   </div>
   <div className="menu fs-3" onClick={openWindow}>
   <CgMenuGridR/>
   </div>
   <div className={open}>
   <span onClick={closeWindow} className=' close position-absolute end-0 m-2 fs-4 cursor'> <AiFillCloseSquare/></span>
   <ul className=' list-unstyled'>
    <li>Home</li>
    <li>Pages</li>
    <li>Serives</li>
    <li>Projects</li>
    <li>Blog</li>
    <li>Contact Us</li>
   </ul>
   <div className='carterth'>
  <i><BsCart3/></i>
   <i><CiHeart/></i>
   </div>
   </div>
   </div>
   {/* </div> */}
  
   </>
  )
}
