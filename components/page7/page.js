import style from './style.module.css'

export default function Page7(params) {
    return(
        <section className='py-10'>
            <div style={{backgroundImage: 'url(/img/image.png)'}} className={style.comment}>
                <div className='relative z-10 text-black'>
                    <h1 className=' playfair text-white text-3xl sm:text-5xl text-center'>WEDDING EXPRESSION</h1>
                    <div className='border-b-2 border-white w-full mb-5' />
                    <input type='text' placeholder='Masukkan Nama' className='w-full p-2 rounded-lg my-2 outline-none' />
                    <input type='text' placeholder='Ucapkan Sesuatu' className='w-full p-2 pb-7 rounded-lg my-2 outline-none' />
                    <button className='bg-black bg-opacity-50 px-4 py-2 border rounded-lg text-white'>Kirim</button>
                    <div className='border-b-2 border-white w-full my-2 ' />
                    <div className='h-56'></div>
                </div>
            </div>
        </section>
    )
}