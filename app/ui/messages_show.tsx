"use client"
import React from "react"
import { Roboto } from "next/font/google"
import Image from "next/image"

const font_Roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic", "latin"]
})

export default function Messages({ sentMessages }: { sentMessages: string[] }) {
    let date = new Date(Date.now())

    return (
        <div className="flex relative flex-col p-[16px] gap-2 overflow-y-auto h-[278px]">
            {sentMessages.map((messg: string, idx) => (
                <div className="flex flex-row relative" key={idx}>
                    <div className="rounded-sm bg-[#DAE2EA] w-fit h-fit place-content-center max-w-[352px]">
                        {(() => {
                            if (messg.includes("https://media")) {
                                return (
                                    <div className=" h-[220px] w-[352px] relative">
                                        <Image className="rounded-[6px]" src={messg} alt="" fill></Image>
                                    </div>
                                );
                            } else {
                                return (
                                    <p className={"text-black text-[13px] mx-1 text-wrap break-all " + font_Roboto.className}>
                                        {messg}
                                    </p>
                                );
                            }
                        })()}
                    </div>
                    <p className={"ml-[8px] place-self-end text-[#99A2AD] text-[13px] h-[15px] " + font_Roboto.className}>{date.getHours().toString() + ":" + date.getMinutes().toString()}</p>
                </div>
            ))}
        </div>
    )
}