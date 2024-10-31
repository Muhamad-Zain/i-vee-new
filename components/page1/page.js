import style from './style.module.css'

export default function Page1(params) {
    return(
        // <section className='relative  max-w-[1400]'>
        // <main className=' z-50 w-full  absolute'>
        <section style={{backgroundImage : 'url(/img/image.png)'}} className= {style.bgHero}>
            <div className='relative z-20 w-full  text-center'>
                <h3 className='tracking-[0.1em] '>The Wedding Of</h3>
                <h1 className='text-4xl font-bold py-1 playfair'>Name & Name</h1>
                <p className='text-sm'>31 Desember 2034</p>
                <div className='mt-[40vh]'>
                    <p className='text-sm'>kpd Bpk/Ibu/Saudara/i</p>
                    <h3 className='font-bold py-3 sm:py-5 playfair'>Tamu Undangan</h3>
                    <button className='bg-black bg-opacity-20 p-2 px-4 border border-white rounded-full playfair'>Buka Undangan</button>
                    <p className='text-xs italic  my-1'>Mohon maaf apabila ada kesalahan penulisan nama/gelar</p>
                </div>
            </div>
        </section>
        // </main>
        // </section>
    )
}