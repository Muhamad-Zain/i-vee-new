'use client'
import App from "@/components/app/page"
import { useParams } from "next/navigation"
// import { useRouter } from "next/router"

export default function id() {
    const {id, name} = useParams()
    const idParams = id ? id : ''
return(
    <section>
        <App id={idParams}  />
    </section>
)    
}