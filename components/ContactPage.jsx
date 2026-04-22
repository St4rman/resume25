'use client'

import { useState } from "react"

const ContactPage = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await fetch('/api/contact',{
                method: 'POST',
                body: JSON.stringify({
                    name, email, message,
                }),
                headers: {
                    'content-type':'application/json'
                },
            })

        } catch(err){
            console.error('Err', err);
        }
    }


    return(
        <>
            <form onSubmit={onSubmit}>
                <input 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                type="text" placeholder="Name" 
                 />

                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder="Email"
                />

                <textarea 
                value ={message}
                onChange={(e) => setMessage(e.target.value)}
    
                ></textarea>
                   
                <button type ="submit">Submit</button>      
               
            </form>
        </>
    )
}

export default ContactPage;