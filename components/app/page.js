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
    return(
        <section className="sm:px-20 relative">
            <div className="">
                <Page1 />
            </div>
            <Page2 />
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