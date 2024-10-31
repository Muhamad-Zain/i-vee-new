import style from './style.module.css'
export default function Page7(params) {
    return(
        <section className='my-20'>
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
            </div>
        </section>
    )
}