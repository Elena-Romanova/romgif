"use client"
import React, { FormEvent, useEffect } from "react"
import { Roboto } from "next/font/google"

const font_Roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic", "latin"]
})

export default function MessageInput({message, setMessage, sent_messages, setSent_Messages, setShowGif} : {message: string, setMessage: any, sent_messages: any[], setSent_Messages: any, setShowGif: any}) {
    function sendMessage(e: FormEvent) {
        e.preventDefault()
        setSent_Messages((prevMessages: string[]) => [
            ...prevMessages,
            message
        ])
        setMessage("")
        console.log(sent_messages)
    }

    useEffect(() => {
        if (message.trim() == "/gif") {
            setShowGif(true)
        } else if (message.indexOf("/gif") == 0) {
            setShowGif(true)
        } else {
            setShowGif(false)
        }
    }, [message])
    
    return (
        <form onSubmit={sendMessage} className="w-full h-[62px] border-t-[1px] border-[#DCE1E5] px-[16px] py-[13px] bg-[#FAFBFC]">
            <input required onChange={(e) => {setMessage(e.target.value)}} value={message} className={"w-full h-full border-[1px] border-[#DCE1E5] rounded-[6px] \
            text-black pl-[12px] text-[13px] " + font_Roboto.className}></input>
        </form>
    )
}