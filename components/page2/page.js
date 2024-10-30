import style from './style.module.css'

export default function Page2(params) {
    return(
        <section className='sm:px-20 sm:py-10'>
            <div style={{backgroundImage: 'url(/img/image.png)'}} className={`${style.bg} w-full h-screen sm:h-[80vh] sm:shadow-lg  sm:shadow-black overflow-hidden sm:rounded-3xl`}>
                <div className={`${style.wrap} relative z-10 h-screen sm:h-[80vh]`}>
                    <div className='text-center sm:text-start sm:ml-10  p-10 relative z-10 '>
                        <p>The Wedding Of</p>
                        <h3 className='text-3xl playfair font-bold sm:text-4xl py-2'>Name & Name</h3>
                        <p>31 Desember 2024</p>
                    </div>
                    <p className='relative mt-[50vh] sm:mt-[35vh] w-[95%]  sm:max-w-[1000px] mx-auto text-center  text-slate-200 sm:text-start text-sm  italic leading-tight z-10'>
                        "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, 
                        supaya kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. 
                        Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir." (QS. Ar-Rum: 21)
                    </p>
                </div>
            </div>
        </section>
    )
}