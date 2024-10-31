'use client'
import { useEffect, useState } from "react";
import Page1 from "../page1/page";
import Page2 from "../page2/page";
import Page3 from "../page3/page";
import Page4 from "../page4/page";
import Page5 from "../page5/page";
import Page6 from "../page6/page";
import Page7 from "../page7/page";
import Page8 from "../page8/page";
import Page9 from "../page9/page";



export default function App(params) {
    const [isHidden, setIsHidden] = useState(true)
    const btnElement = () => {
        // toggleMusic()
        setIsHidden(false)
        document.body.style.overflow = 'auto'
        setTimeout(() => {
            const selectId = document.getElementById('page2');
      
            if (selectId) {
              selectId.scrollIntoView({ behavior: 'smooth' });  // Scroll setelah delay
            }
          }, 100); 
    }
    useEffect(() => {

        window.scrollTo(0,0)

        const handleResize = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`)
        }
        handleResize()
        if(isHidden){
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
       
        return() => {
            document.body.style.overflow = '';
        }
    },[isHidden])
    return(
        <section className="sm:px-20 relative">
            <Page1 btn={btnElement} />
            <div id="page2">
                <Page2 />
            </div>
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
            <Page8 />
            <Page9 />
        </section>
    )
}