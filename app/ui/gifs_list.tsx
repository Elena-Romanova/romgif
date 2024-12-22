import React, { useEffect, useState } from "react";
import Image from "next/image";
import {getPopularGifs, searchGifs} from "@/app/lib/gif_api";

export default function ShowGifs({ setMessage, message, sentMessage }: { setMessage: any, message: string, sentMessage: any }) {
    const [gifs, setGifs] = useState<any[]>([])

    useEffect(() => {
        async function fetchGifs() {
            if (message.trim() == "/gif") {
                const response: any[] = await getPopularGifs()
                console.log(response)
                let gifRows: any[] = []
                let allGifs = response.map((gif) => (
                    <button onClick={() => {sentMessage((prevMessages: string[]) => [...prevMessages,gif.images.fixed_height.url]); setMessage("")}} key={gif.id} style={{ width: `${Number(gif.images.fixed_height.width) * 118 / Number(gif.images.fixed_height.height)}px` }} className="flex flex-auto relative h-[118px] w-fit hover:shadow-lg">
                        <Image className="rounded-[2px]" fill src={gif.images.fixed_height.url} alt={gif.alt_text}></Image>
                    </button>
                ))
                for (let index = 2; index < allGifs.length; index = index + 3) {
                    gifRows.push(
                        <div key={gifRows.length} className="flex flex-row gap-[10px] h-[118px] w-[384px] pl-[10px] pr-[6px]">
                            {[allGifs[index-2], allGifs[index-1], allGifs[index]]}
                        </div>
                        
                    )
                setGifs(gifRows)
                }
            } else if (message.indexOf("/gif") == 0){
                const response: any[] = await searchGifs(message.slice(4))
                console.log(response)
                let gifRows: any[] = []
                let allGifs = response.map((gif) => (
                    <button onClick={() => {sentMessage((prevMessages: string[]) => [...prevMessages,gif.images.fixed_height.url]); setMessage("")}} key={gif.id} style={{ width: `${Number(gif.images.fixed_height.width) * 118 / Number(gif.images.fixed_height.height)}px` }} className="flex flex-auto relative h-[118px] w-fit hover:shadow-lg">
                        <Image className="rounded-[2px]" fill src={gif.images.fixed_height.url} alt={gif.alt_text}></Image>
                    </button>
                ))
                for (let index = 2; index < allGifs.length; index = index + 3) {
                    gifRows.push(
                        <div key={gifRows.length} className="flex flex-row gap-[10px] h-[118px] w-[384px] pl-[10px] pr-[6px]">
                            {[allGifs[index-2], allGifs[index-1], allGifs[index]]}
                        </div>
                        
                    )
                setGifs(gifRows)
                }
            }

        }
        fetchGifs()
    }, [message])

    return (
        <div className="z-50 absolute w-[404px] h-[248px] border-[1px] border-[#D3D9DE] bg-white top-[22px] left-[16px] pr-[6px] rounded-[1px] place-content-end">
            <div className="grid grid-flow-row w-[394px] h-[239px] gap-[10px] overflow-y-auto">
                {gifs}
            </div>
        </div>
    )
}