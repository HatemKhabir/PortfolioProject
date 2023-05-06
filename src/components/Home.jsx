import React from 'react'
import { FaStarAndCrescent } from 'react-icons/fa'
import TnIcon from '../assets/tunisiaflag.svg'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#eaeaea] '>
      {/*container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-500'> Hello ! My name is </p>
        <h1 className='text-4xl sm:text-7 font-bold text-[#606268]'>Hatem Khabir</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#922e2e]'>I am a Software Engineering Student</h2>
        <p className='text-[#606268] py-4 max-w-[700px] text-xl font-medium'>I am a software engineering student from tunisia , interested mainly in backend but
          I am willing to become full-developer and expand my knowledge with Various new Technologies.
          This webiste is A portfolio and a country presentation at the same time ! Hope you will like my CV and my coutnry as well !
        </p>
        <div>
          <button className="md:text-black group relative overflow-hidden border-2 border-black py-2 my-1 flex items-center hover:bg-white hover:border-red-300">
            <span className='md:group-hover:opacity-0 ml-5 mr-4 transition-opacity duration-500 ease-out text-l font-bold'>
              <Link activeClass="active" to="tunisia" spy={true} smooth={true} offset={30} duration={500}>
                View My County
              </Link></span>
            <Link activeClass="active" to="tunisia" spy={true} smooth={true} offset={30} duration={500}>
              <img src={TnIcon} className='hidden opacity-0 w-0 h-0 group-hover:opacity-100 group-hover:w-6 group-hover:h-6 text-red-400 md:inline-block ml-3 transform transition-transform duration-300 group-hover:-translate-x-20  group-hover:text-2xl'>
              </img>
            </Link>

          </button>

        </div>


      </div>





    </div>
  )
}

export default Home