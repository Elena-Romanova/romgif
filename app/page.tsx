"use client"
import MessageInput from "@/app/ui/message_input";
import { useState } from "react";
import Messages from "@/app/ui/messages_show";
import ShowGifs from "./ui/gifs_list";
import RainbowGif from "./ui/rainbow_gif";

export default function Home() {
  const [message, setMessage] = useState("")
  const [sent_messages, setSent_Messages] = useState<any[]>([])
  const [showGif, setShowGif] = useState(false)

  return (
    <div className="w-[437px] h-[340px] bg-[#FFFFFF] rounded-[4px] place-content-end relative overflow-hidden">
      {showGif && <ShowGifs setMessage={setMessage} message={message} sentMessage={setSent_Messages}></ShowGifs>}
      {showGif && <RainbowGif></RainbowGif>}
      <Messages sentMessages={sent_messages}></Messages>
      <MessageInput message={message} setMessage={setMessage} sent_messages={sent_messages} setSent_Messages={setSent_Messages} setShowGif={setShowGif}></MessageInput>
    </div>
  );
}
