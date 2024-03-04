import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className=' footer d-flex flex-wrap justify-content-between container p-2'>
        <p className=' m-auto'>Copyright 2022 - Designed & Developed by Frenify</p>
        <ul className=' d-flex list-unstyled m-auto'>
            <li><FaFacebook/></li>
            <li><AiFillInstagram/></li>
            <li><FaTwitter/></li>
            <li><FaLinkedin/></li>
        </ul>
    </div>
    </>
  )
}
