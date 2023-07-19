import React from 'react'
import {Service} from '../assets/img/galery/index'
import Register from './Register'

const Daftar = () => {
  return (
    <div className='w-full bg-white  py-32 lg:py-50'>
        <div className='bg-[#EF841A] w-full p-3  mt-[-24px] '>
            <p className='text-xl'>Beranda &gt; Aruna SDC &gt; Workshop </p>
        </div>
        <div className=' p-20 mx-20 flex'>
            <div className=' '>
                <img src={Service} alt='Service' className='' />            
            </div>
            <div className='px-10'>
                <h3 className='text-xl font-bold'>Judul Workshop</h3>
                <div className='flex text-sm my-5'>
                    <i className="fa-thin fa-calendar-days "/>
                    <p>20 Maret 2023 09:00 AM</p>
                </div>
                <p>Deskripsi :</p>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Etiam eu turpis molestie, dictum est a, mattis tellus. 
                    Sed dignissim, metus nec fringilla accumsan, risus sem 
                    sollicitudin lacus, ut interdum tellus elit sed risus. 
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
            </div>
        </div>
        <div className='p-10 mx-20'>
            <h3>PERSYARATAN PENDAFTARAN</h3>
            <div>
                <ul className='list-disc'>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
            </div>
        </div>
        <div className='mb-10'>
            <Register />
        </div>
    </div>
    
  )
}

export default Daftar