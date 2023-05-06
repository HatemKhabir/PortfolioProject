import React, { useState } from 'react'
import TnFlag from '../assets/tn.png'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#922e2e] text-gray-300 z-50'>
      <div>
        <img src={TnFlag} alt='Logo' style={{ width: '50px' }} />
      </div>
      {/*Menu  */}
      <ul className='hidden md:flex'>
        <li className=' hover:font-bold hover:text-2xl duration-500'>
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={30} duration={500}>
            Home
          </Link>
        </li>
        <li className='bg-clip-text bg-white hover:text-transparent bg-gradient-to-b hover:font-bold hover:from-red-600 hover:to-red-100 hover:text-2xl duration-500'>
          <Link activeClass="active" to="tunisia" spy={true} smooth={true} offset={30} duration={500}>
            Tunisia
          </Link>
        </li>
        <li className='hover:font-bold hover:text-2xl duration-500'>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={30} duration={500}>
            Skills
          </Link>
        </li>
        <li className='hover:font-bold hover:text-2xl duration-500'><a href='https://drive.google.com/file/d/15m3eTQoZID2cZI91rY_vRvbminajoTG1/view?usp=share_link' target='_blank'>Resume</a></li>
        <li className='hover:font-bold hover:text-2xl duration-500'>
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={30} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/*menu bar  */}
      <div onClick={handleClick} className='md:hidden  z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-500 transform ${!nav ? '-translate-y-full' : 'translate-y-0'} ease-in-out`}>
        <li className='py-6 text-3xl hover:font-bold hover:text-4xl duration-500'>
          <Link onClick={handleClick} activeClass="active" to="home" spy={true} smooth={true} offset={30} duration={500}>
            Home
          </Link></li>
        <li className='py-6 bg-clip-text bg-white hover:text-transparent bg-gradient-to-r text-3xl hover:font-bold hover:from-red-800 hover:to-red-300 hover:text-4xl duration-500'>
          <Link onClick={handleClick} activeClass="active" to="tunisia" spy={true} smooth={true} offset={30} duration={500}>
            Tunisia
          </Link>
        </li>
        <li className='py-6 text-3xl hover:font-bold hover:text-4xl duration-500'>
          <Link onClick={handleClick} activeClass="active" to="skills" spy={true} smooth={true} offset={30} duration={500}>
            Skills
          </Link>
        </li>
        <li onClick={handleClick} className='py-6 text-3xl hover:font-bold hover:text-4xl duration-500'><a href='https://drive.google.com/file/d/15m3eTQoZID2cZI91rY_vRvbminajoTG1/view?usp=share_link' target='_blank'>Resume</a></li>
        <li className='py-6 text-3xl hover:font-bold hover:text-4xl duration-500'>
          <Link onClick={handleClick} activeClass="active" to="contact" spy={true} smooth={true} offset={30} duration={500}>
            Contact
          </Link></li>
      </ul>



      {/*Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[180px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
            <a className='flex justify-between items-center w-full text-gray-300 text-2xl ml-[-2px]' href='https://www.linkedin.com/in/hatemkhabir/' target="_blank">
              LinkedIn<FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[180px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
            <a className='flex justify-between items-center w-full text-gray-300 text-2xl ml-[10px]' href='https://github.com/HatemKhabir' target="_blank">
              Github<FaGithub size={30} />
            </a>
          </li>
          <li className='w-[180px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4a4c4e]'>
            <a className='flex justify-between items-center w-full text-gray-300 text-2xl ml-[15px]' href='/'>
              <a href="mailto:hatemkhabir.cse@gmail.com">Email</a><HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[180px] h-[70px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a192f]'>
            <a className='flex justify-between items-center w-full text-gray-300 text-2xl ml-[10px]' href='/'>
              <a href='https://drive.google.com/file/d/15m3eTQoZID2cZI91rY_vRvbminajoTG1/view?usp=share_link' target='_blank'>Resume</a><BsFillPersonLinesFill size={30} />
            </a>
          </li>

        </ul>




      </div>



    </div>
  )
}

export default Navbar