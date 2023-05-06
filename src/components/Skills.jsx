import React from 'react';
import Js from '../assets/js.png';
import C from '../assets/C.png';
import Csharp from '../assets/csharp.png';
import Css from '../assets/css3.png';
import Ghub from '../assets/githubsign.png';
import Html from '../assets/html5.png';
import Java from '../assets/java.png';
import Mongo from '../assets/mongodb.svg';
import ReactPic from '../assets/react.png';



const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#eaeaea]'>
            <div className='relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-slate-400 text-[#922e2e] '>  Skills</p>
                    <p className='py-4 mt-4 font-bold text-2xl'> These are the technologies I am experienced at </p>
                </div>
                <div className='relative left-[10%] w-10/12 grid grid-cols-2 gap-4 sm:grid-cols-4 text-center py-8 '>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={Html} alt="html Icon"></img>
                        <p className='font-bold mt-1'>HTML</p>
                    </div>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={ReactPic} alt="html Icon"></img>
                        <p className='font-bold mt-1'>ReactJS</p>
                    </div>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={Java} alt="html Icon"></img>
                        <p className='font-bold mt-1'>Java</p>
                    </div>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={C} alt="html Icon"></img>
                        <p className='font-bold mt-1'>C</p>
                    </div>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={Css} alt="html Icon"></img>
                        <p className='font-bold mt-1'>CSS</p>
                    </div>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={Csharp} alt="html Icon"></img>
                        <p className='font-bold mt-1'>C#</p>
                    </div>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={Js} alt="html Icon"></img>
                        <p className='font-bold mt-1 '>Javascript</p>
                    </div>
                    <div className='shadow-md group shadow-slate-500 hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto group-hover:scale-110 duration-500' src={Mongo} alt="html Icon"></img>
                        <p className='font-bold mt-1'>MongoDB</p>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default Skills;