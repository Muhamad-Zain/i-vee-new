import PropTypes from 'prop-types'
import style from './style.module.css'

export default function Page3({data}) {
    return(
        <section className='py-10 px-2 sm:px-20'>
            <div className=' flex  items-center '>
                <div style={{backgroundImage:'url(/img/image.png)'}} className={style.bgCardMen}>
                </div>
                <div className={style.chil}>
                    <h3>THE GROOM</h3>
                </div>
            </div>
            <div className='relative z-10  p-5'>
                <h3 className='text-2xl playfair italic font-bold' style={{textShadow: '2px 2px black'}}>{data?.name?.namaLenkap?.mens}</h3>
                <p className='italic'>Putra Dari bapak {data?.parent?.mens?.father} <br /> dan Ibu {data?.parent?.grils?.mother} </p>
            </div>
            <div className='flex justify-center items-center py-5 text-5xl playfair'>
                <div className='border-b-2 border-white w-10 pr-2' />&<div className='border-b-2 border-white w-10 pl-2' />
            </div>
            <div className=' flex  items-center justify-end'>
                <div className={style.chil}>
                    <h3>THE BRIDE</h3>
                </div>
                <div style={{backgroundImage:'url(/img/image.png)'}} className={style.bgCardGrils}>
                </div>
                
            </div>
            <div className='relative z-10 text-end p-5'>
                <h3 className='text-2xl playfair italic font-bold'  style={{textShadow: '2px 2px black'}}>{data?.name?.namaLenkap?.grils}</h3>
                <p className='italic'>Putri Dari bapak {data?.parent?.grils?.father} <br /> dan Ibu {data?.parent?.grils?.mother} </p>
            </div>
        </section>
    )
}
Page3.propTypes = {
    data: PropTypes.string
}