import React from "react";
import LinkToBtn from "./LinkToBtn";

export default function SectionContent({textSide, text, img, extraClasses, showBtn, handleShowModal}) {
    

    const textBox = 
        <div className="flex flex-col justify-center items-center text-justify w-50vw px-5 border-2 border-solid border-black">
            {
                text.map( (par, idx) => (
                    <p key={`${par}-${idx}`}>
                        {par}
                    </p>
                ))
            }
            {
                showBtn ? <LinkToBtn href="/bestel" text={"Bestel hier"} /> : null
            }
        </div>

    return(
        <div className={`flex flex-row justify-between border-2 border-solid border-red${extraClasses}`}>
            {textSide === "left" ? textBox : null}
            <img 
                src={img}
                alt={text.title}
                className="rounded-xl w-40vw max-w-50"
            ></img>
            {textSide === "right" ? textBox : null}
        </div>
    );
};