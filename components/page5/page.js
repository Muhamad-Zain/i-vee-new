'use client'
import Countdown from "react-countdown";


export default function Page5(params) {
    const data = '2024-12-09'

    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return (<span>Hari Penikahan Telah Tiba!!</span>);
        } else {
          // Render a countdown
          return (
              <div style={{  fontSize: '2rem', textAlign: 'center' }} className="flex w-[90%] py-5 sm:w-1/2 m-auto font-serif text-white p-2 justify-between">
              <div className="rounded-lg bg-white bg-opacity-10 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {days}
                      <p className="text-sm">Hari</p>
                   </div>
              </div>
              <div className=" rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {hours}
                      <p className="text-sm">Jam</p>
                   </div>
              </div>
              <div className=" rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {minutes}
                      <p className="text-sm">menit</p>
                   </div>
              </div>
              <div className=" rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {seconds}
                      <p className="text-sm">Detik</p>
                   </div>
              </div>
            </div>
          );
        }
      };
    return(
        <section>
            <div className="text-center playfair text-3xl sm:text-5xl">
                <h3>COUNDOWN ACARA</h3>
                <Countdown date={data} renderer={renderer} />
                <button className="py-2 px-4 rounded-full bg-white bg-opacity-10">SAVE DATE</button>
            </div>
        </section>
    )
}