'use client'

import { useState } from "react"
import { Button } from "./ui/button";
import { TextFade } from "@/components/TextFade";
import { Smile } from 'lucide-react';

const ContactPage = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setSubmitted] = useState(false);

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
            if(res.status===200){
                setSubmitted(true);
            }

        } catch(err){
            console.error('Err', err);
        }
    }


    return(
        isSubmitted ? (
        <>
            
            <div className="w-full flex items-center-safe justify-center">
                <TextFade>
                <div className="text-2xl text-center">
                    thanks for reaching out, i'll email you back as soon as i can! :&#93;
                </div>
                </TextFade>
            </div>
            
        </>
        ) : (
        <>
            <form onSubmit={onSubmit} className="w-full">
                <div>
                    <label for="name" class="block m-2.5 text-sm font-medium text-heading">Name</label>
                    <input
                    id="name" 
                    value={name}
                    required 
                    onChange={(e) => setName(e.target.value)}
                    type="text" placeholder="firstname lastname"  
                    className="bg-black/40 rounded-sm p-2 w-full text-accent placeholder-white/30" 
                    />
                </div>
                <div>
                    <label for="email" class="block m-2.5 text-sm font-medium text-heading">Email address</label>
                    <input 
                    id="email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email" placeholder="address@emailservice.com" 
                    className="bg-black/40 rounded-sm p-2 w-full text-accent placeholder-white/30"
                    />
                </div>
                
                <div>
                    <label for="message" class="block m-2.5 text-sm font-medium text-heading">Message</label>

                    <textarea
                        id="message" 
                        value ={message}
                        onChange={(e) => setMessage(e.target.value)} 
                        className="bg-black/40 rounded-sm p-2 w-full text-accent placeholder-white/30"
                    ></textarea>
                </div>
                
                   
                <Button type ="submit" className="w-full my-10">Submit</Button>      
               
            </form>
        </>
        )
    )
    
}

export default ContactPage;