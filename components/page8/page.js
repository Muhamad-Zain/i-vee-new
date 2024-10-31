"use client"
import { useState } from 'react'
import style from './style.module.css'


export default function Page8(params) {
    const [gift, setGift] = useState(false)



    const handleGift = () => {
        setGift(!gift)
    }


    return(
        <section className='my-10'>
            <div style={{backgroundImage: 'url(/img/image.png)'}} className={style.rsvp}>
                <div className='z-10 relative w-full'>
                    <h3 className='text-5xl playfair text-center py-5'>RSVP</h3>
                    <p className='text-center text-xs'>Silahkan konfirmasi kehadiran anda !</p>
                    <label>Nama</label>
                    <input type='text' placeholder='Masukkan Nama' className='w-full p-2 rounded-md outline-none text-black' />
                    <div className='flex items-center justify-between  text-black my-5'>
                        <div className='w-[45%]'>
                            <label className='text-white grid'>Kehadiran</label>
                            <select className='outline-none bg-white w-full p-[8.5px] rounded-md'>
                                <option value='ya'>ya</option>
                                <option value='tidak'>tidak</option>
                                <option value='ragu'>ragu</option>
                            </select>
                        </div>
                        <div className='w-[45%]'>
                            <label className='text-white grid'>Jumlah</label>
                            <input type='number' placeholder='' className='outline-none p-2 rounded-md w-full'/>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button className='py-2 px-4 rounded-full bg-black bg-opacity-45 border mx-auto'>Konfirmasi</button>
                    </div>
                </div>
                <div className='border-b-2 w-[90%] m-auto relative z-10 py-5' />
                <div className='relative z-10'>
                    <h1 className='text-5xl playfair text-center py-5 '>GIFT</h1>
                    <p className='text-center text-xs pb-5'>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
                    <div className='flex justify-center'>
                        <button 
                            onClick={handleGift}
                            className='bg-black bg-opacity-45 border py-2 px-4 rounded-full'>Open Gift</button>
                        </div>
                    <div className={`${gift ? ' max-h-[200rem] opacity-100' : ' max-h-0 opacity-0 '} transition-all duration-500 ease-in-out  overflow-hidden w-full flex flex-wrap justify-around py-5`}>
                        <div className='sm:w-[45%] w-[90%] my-2 bg-white border-4 border-double bg-opacity-25 p-5 rounded-2xl'>
                            <h1>Mandiri</h1>
                            <p>58964874347858758</p>
                        </div>
                        <div className='sm:w-[45%] w-[90%] my-2 bg-white border-4 border-double bg-opacity-25 p-5 rounded-2xl'>
                            <h1>Mandiri</h1>
                            <p>58964874347858758</p>
                        </div>
                        <div className='sm:w-[45%] w-[90%] my-2 bg-white border-4 border-double bg-opacity-25 p-5 rounded-2xl'>
                            <h1>Mandiri</h1>
                            <p>58964874347858758</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}