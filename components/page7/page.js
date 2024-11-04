import PropTypes from 'prop-types'
import style from './style.module.css'
import { useEffect, useState } from 'react'
import { database, fetchData } from '../data/firebase'
import { onValue, ref, set } from 'firebase/database'

export default function Page7({data, id}) {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [ucapan, setUcapan] = useState([])

    useEffect(() => {
        // const getData = async (id) => {
        //     const rsvp = fetchData(id)
        // }

        const messageRef = ref(database, `${id}/expresion`)
        onValue(messageRef ,(snapshot) => {
            const data = snapshot.val()
            const list = []
            for(const key in data){
                list.push({id: key, ...data[key]})
            }
            setUcapan(list)
        })
    },[])
    const [alert, setAlert] = useState('')
    const handleSend = (e) =>{
        e.preventDefault()

        if (name === '' || message === '') {
            setAlert('Silahkan isi terlebih dahulu !!')
            setTimeout(() => {
                setAlert('')
            }, 2000);
        } else {
            const messages = ref(database, `${id}/expresion/${Date.now()}`)
            set(messages, {
                name,
                text:message
            })
            setName('')
            setMessage('')
        }

    }
    return(
        <section className='py-10'>
            <div style={{backgroundImage: 'url(/img/image.png)'}} className={style.comment}>
                <form
                    onSubmit={handleSend} 
                    className='relative z-10 text-black'>
                    <h1 className=' playfair text-white text-3xl sm:text-5xl text-center'>WEDDING EXPRESSION</h1>
                    <div className='border-b-2 border-white w-full mb-5' />
                    <input 
                        type='text' 
                        placeholder='Masukkan Nama' 
                        className='w-full p-2 rounded-lg my-2 outline-none'
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    <input 
                        type='text' 
                        placeholder='Ucapkan Sesuatu' 
                        className='w-full p-2 pb-7 rounded-lg my-2 outline-none'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message} />
                        <p className='text-slate-300 text-center py-2'>{alert}</p>
                    <button 
                        type='submit' 
                        // disabled={message ==='' || name === '' ? true : false}
                        className='bg-black bg-opacity-50 px-4 py-2 border rounded-lg text-white'
                        >Kirim</button>
                    <div className='border-b-2 border-white w-full mt-2 ' />
                    <div className='h-56'>
                    {ucapan && ucapan.length > 0 ? (
                        ucapan.map((msg) => (
                            <p key={msg.id} className='text-white border-b-2 py-3'>
                                <strong>{msg.name}:</strong> {msg.text}
                            </p>
                        ))
                    ) : (
                        <p className='text-white'>Tidak ada ucapan.</p>
                    )}

                    </div>
                </form>
            </div>
        </section>
    )
}

Page7.propTypes = {
    data: PropTypes.string,
    id: PropTypes.string
}