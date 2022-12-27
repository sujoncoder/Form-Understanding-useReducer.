import React from 'react'
import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"

const Form = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <form action="">
        <div className='w-[600px] h-[500px] flex justify-evenly mx-auto border-2 border-t-teal-200 border-l-yellow-200 border-r-pink-200 border-b-blue-300 rounded-xl shadow-lg bg-gray-100 p-6'>
            {/* first section */}
            <div>

              {/* First Name */}
              <div>
                <label className='text-gray-500 text-lg'>
                FirstName
                </label>
                <input type="text" name='firstName' className='border-2 text-xl text-gray-500 rounded w-[220px] h-10 px-2' />
              </div>

              {/* Email */}
              <div>
                <label className='text-gray-500 text-lg'>
                  Email
                </label><br />
                <input type="email" name='email' className='border-2 text-xl text-gray-500 px-2 rounded w-[220px] h-10' />
              </div>

              {/* Education */}
            <div>
                <label className='text-gray-500 text-lg'>
                Education
                </label>
                <select className='border-2 text-xl text-gray-600 rounded w-[220px] h-10'  name="education" id="education">
                  <option value="SSC">SSC</option>
                  <option value="HSC">HSC</option>
                  <option value="UnderGrad">UnderGrad</option>
                  <option value="Gratuate">Gratuate</option>
                </select>
            </div>
              

              {/* Feedback */}
            <div>
              <label className='text-gray-500 text-lg'>
                Feedback
              </label>
              <textarea type="text" name='feedback' rows="5" cols="22
              1" className='border-2 text-xl text-gray-500 rounded px-2' /><br /><br />
            </div>

              {/* Checkbox */}
            <div className='flex space-x-4'>
              <input type="checkbox" name="toggle" id="" />
              <label className='text-gray-600 text-lg'>
                I agree to terms and condition.
              </label>
            </div>
          </div>

            {/* second corner */}
            <div>
              <div>
                <label className='text-gray-500 text-lg'>
                  LastName
                </label>
                <input type="text" name='lastName' className='border-2 text-xl text-gray-500 px-2 rounded w-[220px] h-10' /><br /><br />
              </div>
              
              {/* Gender Section */}
              <label className='text-xl text-gray-500 mb-10'>
                Gender
              </label>

            <div className='flex space-x-4 pb-4 pt-4'>

                {/* Radio button */}
              <div className='space-x-2'>
               <input type="radio" />
               <label htmlFor="">Male</label>
              </div>

              <div className='space-x-2'>
               <input type="radio" />
               <label htmlFor="">Female</label>
              </div>

              <div className='space-x-2'>
               <input type="radio" />
               <label htmlFor="">Other</label>
              </div>

            </div>

              {/* Increment section */}
              <div className='py-4'>
              <label className='text-gray-600 text-lg'>Number of PCs</label>
              </div>

              <div className='flex justify-evenly items-center '>
                <AiOutlineMinus className='bg-gray-300 rounded text-3xl cursor-pointer active:bg-gray-400'/>
                <div className='rounded h-8 w-[150px] bg-white text-center border-2'>
                  <span className='text-xl text-slate-600'>0</span>
                </div>
                <AiOutlinePlus className='bg-gray-300 rounded text-3xl  cursor-pointer active:bg-gray-400'/>
              </div><br /><br /><br /><br /><br />

            {/* Submit Section */}
            <div className='flex justify-end'>
              <button className='border-2 border-gray-400 mr-6 active:bg-slate-300 rounded-lg px-2 py-1 shadow bg-slate-200 text-xl duration-300' type='submit'>Submit</button>
            </div>

            </div>
        </div>
      </form>
    </div>
  )
}

export default Form