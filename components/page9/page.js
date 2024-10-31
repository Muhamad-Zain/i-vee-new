import style from './style.module.css'

export default function Page9(params) {
    return(
        <section className='my-10'>
            <div style={{backgroundImage: 'url(/img/image.png)'}} className={style.bg}>
                <div className='relative z-10 text-center'>
                    <h1>WEDDING GIFT</h1>
                    <p>Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.</p>
                </div>
            </div>
        </section>
    )
}