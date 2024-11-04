import PropTypes from "prop-types"


export default function Page6({data}) {
    return(
        <section className=" w-[90%] sm:flex bg-[#302d2d] m-auto justify-around items-center my-20 py-10 px-5 rounded-2xl shadow-2xl shadow-black">
            <div className=" sm:w-2/5 ">
                <img src='/img/image.png' alt="love story"  className="rounded-2xl" />
            </div>
            <div className="sm:w-1/2">
                <h3 className="text-5xl playfair text-center py-5">Love Story</h3>
                <p className="">
                    {data?.story?.one}
                </p>
                <p className="py-5">
                    {data?.story?.two}
                </p>
                <p>
                {data?.story?.tree}
                </p>
                <h3 className="text-2xl py-3 font-bold playfair text-end">{data?.name?.mens} & {data?.name?.grils}</h3>
            </div>
        </section>
    )
}
Page6.propTypes = {
    data: PropTypes.string
}