import React from "react";
import { Roboto } from "next/font/google";

const font_Roboto = Roboto({
    weight: "400",
    subsets: ["cyrillic", "latin"]
})

export default function RainbowGif() {
    return (
        <div className="z-50 absolute w-10 h-[28px] text-[#828282] text-[13px] place-content-center place-self-center">
            <div className={"translate-y-[295.5px] translate-x-[28.8px] " + font_Roboto.className} id=" relative colored_gif_div"><span id="colored_gif">/gif</span></div>
            <style>
                {"#colored_gif {background: linear-gradient(135deg, #2EE6A8 0%, #3399FF 34.37%, #9933FF 69.27%, #FF3399 100%);\
            -webkit-background-clip: text;-webkit-text-fill-color: transparent;}"}
            </style>
        </div>
    )
}