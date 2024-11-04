'use client'
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";


export default function Page5({data}) {
    const time = `${data?.date?.all}`
    
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Set state untuk render hanya di klien
    }, []);

    const renderer = ({days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return (<span>Hari Penikahan Telah Tiba!!</span>);
        } else {
          // Render a countdown
          return (
              <div style={{  fontSize: '2rem', textAlign: 'center' }} className="flex w-[90%] py-5 sm:w-3/4 lg:w-1/3 m-auto font-serif text-white p-2 justify-between">
              <div className="rounded-lg bg-white bg-opacity-10 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {days}
                      <p className="text-sm">Days</p>
                   </div>
              </div>
              <div className=" rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {hours}
                      <p className="text-sm">Hours</p>
                   </div>
              </div>
              <div className=" rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {minutes}
                      <p className="text-sm">Minutes</p>
                   </div>
              </div>
              <div className=" rounded-lg bg-white bg-opacity-15 w-[4rem] h-[3.5rem]  flex justify-center items-center">
                   <div className="leading-6 text-xl font-bold">
                      {seconds}
                      <p className="text-sm">Seconds</p>
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
                {
                  isClient && 
                  <Countdown date={time} renderer={renderer} />
                }
                <button className="py-2 px-4 rounded-2xl bg-white bg-opacity-10">SAVE DATE</button>
            </div>
        </section>
    )
}
Page5.propTypes = {
  data: PropTypes.string
}