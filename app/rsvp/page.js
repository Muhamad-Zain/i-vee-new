'use client'
import { useParams } from "next/navigation";


export default function Rsvp(data) {
    const {id} = useParams()

    console.log(id);
    
    return(
        <section className=" max-w-[400px] bg-slate-700 min-h-screen m-auto">
            <div>
                <h2 className="playfair text-5xl font-bold underline text-center italic animate-pulse">RSVP</h2>
                <div></div>
            </div>
        </section>
    )
    
}