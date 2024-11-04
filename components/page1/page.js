// 'use client'
import PropTypes from 'prop-types'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { fetchImage } from '../data/firebase'


export default function Page1({btn, name, data}) {
    const [disable, setDisable] = useState(false)
    const [image, setImage] = useState('')
    // const [data, setData] = useState([])
    // console.log(data);

    
    
    
    const btnLocal = () => {
        setDisable(true)
    }

    useEffect(() => {
        const getImage = async () => {
            
            const url = await fetchImage('image.png')
            setImage(url)
        }

        
        getImage()

    },[])
    return(
        <section style={{backgroundImage : `url(${image})`}} className= {style.bgHero}>
            <div className='relative z-20 w-full  text-center'>
                <h3 className='tracking-[0.1em] '>The Wedding Of</h3>
                <h1 className='text-4xl font-bold py-1 playfair'>{data?.name?.mens} & {data?.name?.grils}</h1>
                <p className='text-sm'>{data?.date?.resepsi}</p>
                <div className='mt-[40vh]'>
                    <p className='text-sm'>kpd Bpk/Ibu/Saudara/i</p>
                    <h3 className='font-bold py-3 sm:py-5 playfair'>{name ? name : 'Nama Tamu'}</h3>
                    <button onClick={()=> {btnLocal(), btn()}} disabled={disable} className='bg-black bg-opacity-20 p-2 px-4 border border-white rounded-full playfair'>Buka Undangan</button>
                    <p className='text-xs italic  my-1'>Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
                </div>
            </div>
        </section>

    )
}

Page1.propTypes = {
    btn: PropTypes.func,
    name: PropTypes.string,
    data: PropTypes.string
}