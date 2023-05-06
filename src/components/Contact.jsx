import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#eaeaea] flex justify-center items-center p-4' >
            <form method='POST' action="https://getform.io/f/ed94f35a-1341-4417-bc22-a48843d30fd5" className='relative -top-[40%] flex flex-col max-w-[1000px] w-full items-center'>
                <div className='pb-8'>
                    <p className='absolute top-10 left-10 text-4xl font-bold border-b-4 border-slate-400 text-[#922e2e]'>Contact</p>
                </div>
                <div className='absolute top-24 left-[23%] py-4 font-bold'>
                    <p className=' mb-6'>Submit the form below or you can send me directly an email to : <a href="mailto:hatemkhabir.cse@gmail.com">hatemkhabir.cse@gmail.com</a></p>
                    <input className='w-full p-2' type="text p-2" placeholder='Name' name='name' />
                    <input className='w- full my-4 p-2  w-full' type="email" placeholder='Email' name='email' />
                    <textarea name='message' rows="10" placeholder='Message' className='p-2 w-full' />
                    <button className='text-black scale-125 border-black rounded-lg border-2 hover:border-red-500 hover:font-bold px-4 my-8 mx-auto flex items-center'>Submit</button>
                </div>

            </form>


        </div>
    )
}

export default Contact