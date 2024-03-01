import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className=' footer d-flex justify-content-between container p-2'>
        <p>Copyright 2022 - Designed & Developed by Frenify</p>
        <ul className=' d-flex list-unstyled'>
            <li><FaFacebook/></li>
            <li><AiFillInstagram/></li>
            <li><FaTwitter/></li>
            <li><FaLinkedin/></li>
        </ul>
    </div>
    </>
  )
}
