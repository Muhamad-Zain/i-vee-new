import style from './style.module.css'
export default function Page3(params) {
    return(
        <section className='py-10 px-2 sm:px-20'>
            <div className=' flex  items-center '>
                <div style={{backgroundImage:'url(/img/image.png)'}} className={style.bgCardMen}>
                    <div className='relative z-10 '>
                        <h3 className='text-2xl playfair italic' style={{textShadow: '2px 2px black'}}>Nama Lengkap</h3>
                        <p className='italic'>Putra Dari bapak Lorem <br /> dan Ibu Ipsum </p>
                    </div>
                </div>
                <div className={style.chil}>
                    <h3>THE GROOM</h3>
                </div>
            </div>
            <div className='flex justify-center items-center py-20 text-5xl playfair'>
                <div className='border-b-2 border-white w-10 pr-2' />&<div className='border-b-2 border-white w-10 pl-2' />
            </div>
            <div className=' flex  items-center justify-end'>
                <div className={style.chil}>
                    <h3>THE BRIDE</h3>
                </div>
                <div style={{backgroundImage:'url(/img/image.png)'}} className={style.bgCardGrils}>
                    <div className='relative z-10'>
                        <h3 className='text-2xl playfair italic'  style={{textShadow: '2px 2px black'}}>Nama Lengkap</h3>
                        <p className='italic'>Putra Dari bapak Lorem <br /> dan Ibu Ipsum </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}