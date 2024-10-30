import style from './style.module.css'
import { LuAlarmClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";




export default function Page4(params) {
    return(
        <section>
            <div style={{backgroundImage: 'url(/img/image.png'}} className={style.bgAcara}> 
                <div className='relative z-10 py-5'>
                    <h3 className='playfair text-3xl sm:text-5xl'>AKAD NIKAH</h3>
                    <p className='uppercase'>31 Desember 2024</p>
                    <div className='text-xs py-3'>
                        <div className='flex items-center '>
                            <LuAlarmClock />
                            <p className='pl-2'>09.00 - selesai</p>
                        </div>
                        <div className='flex items-center '>
                            <IoLocationOutline />
                            <p className='pl-2'>Rumah Mempelai Wanita</p>
                        </div>
                    </div>
                    <button className='py-2 px-4 flex items-center rounded-full bg-black bg-opacity-25 border border-white'>
                        <SiGooglemaps className='mr-2' />
                        location
                    </button>
                </div>
                <div className='border-b-2 border-white w-10/12 sm:w-1/2 relative z-10' />
                <div className='relative z-10 py-5'>
                    <h3 className='playfair text-3xl sm:text-5xl'>RESEPSI</h3>
                    <p className='uppercase'>31 Desember 2024</p>
                    <div className='text-xs py-3'>
                        <div className='flex items-center '>
                            <LuAlarmClock />
                            <p className='pl-2'>09.00 - selesai</p>
                        </div>
                        <div className='flex items-center '>
                            <IoLocationOutline />
                            <p className='pl-2'>Rumah Mempelai Pria</p>
                        </div>
                    </div>
                    <button className='py-2 px-4 flex items-center rounded-full bg-black bg-opacity-25 border border-white'>
                        <SiGooglemaps className='mr-2' />
                        location
                    </button>
                </div>
            </div>
        </section>
    )
}