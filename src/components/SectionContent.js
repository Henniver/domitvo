import React from "react";
import LinkToBtn from "./LinkToBtn";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function SectionContent({textSide, text, img, extraClasses, showBtn, part2}) {
    

    const textBox = 
        <div className={`flex flex-col justify-center items-center text-justify w-full lg:py-0 lg:w-50vw ${textSide === "right" ? "lg:pl-10" : "lg:pr-10"}`}>
            {
                text.map( (par, idx) => (
                    <p key={`${par}-${idx}`}>
                        {par}
                    </p>
                ))
            }
            {   
                <p hidden={!part2}>
                    Nu de coronamaatregelen versoepeld worden en de horecazaken terug opengaan, is “de Oude Markt terug van ons” voor de jeugd. De jeugd is onze toekomst. Ook in Guatemala is dit zo. <AnchorLink href="#Steun Ons" className="text-gold hover:underline">Steun Ajpopoli</AnchorLink> en drink met maten en met mate.
                </p>
            }
            {
                showBtn ? <LinkToBtn href="/bestel" text={"Bestel hier"} /> : null
            }
        </div>

    return(
        <div className={`flex flex-col lg:flex-row justify-between ${extraClasses}`}>
            {textSide === "left" ? textBox : null}
            <img 
                src={img}
                alt={text.title}
                className="rounded-xl w-full lg:w-40vw lg:max-w-50 my-4 lg:my-0"
            ></img>
            {textSide === "right" ? textBox : null}
        </div>
    );
};