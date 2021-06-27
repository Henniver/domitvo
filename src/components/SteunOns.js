import React from "react";

export default function SteunOns({text, img1, img2, title}) {
    return (
        <React.Fragment>
            <div className={`flex flex-row justify-center mb-5vh relative`} key={"subsection-1"}>
                <img 
                    src={img1}
                    alt={title}
                    className="rounded-xl w-50vw max-w-50"
                    key={"ajpopoli-img-1"}
                ></img>
                <div className="flex flex-col justify-center items-center text-justify w-40vw px-10">
                    <p className="my-2">De opbrengsten van de verkoop van het bier gaat integraal naar <a className="text-gold" href="www.ajpopoli.com">vzw Ajpopoli</a>.</p>
                    {
                        text.slice(1,3).map( (par, idx) => (
                            <p 
                                className="my-2"
                                key={`ajpopoli-1-${idx}`}
                            >
                                {par}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className={`flex flex-row justify-center`} key={"subsection-2"}>
                <div className="flex flex-col justify-center items-center text-justify w-40vw px-10">
                    {
                        text.slice(3,-1).map( (par, idx) => (
                            <p
                                className="my-2"
                                key={`ajpopoli-2-${idx}`}
                                id={`ajpopoli-2-${idx}`}
                            >
                                {par}
                            </p>
                        ))
                    }
                </div>
                <img 
                    src={img2}
                    alt={title}
                    className="rounded-xl w-50vw max-w-50"
                    key={"ajpopoli-img-2"}
                ></img>
            </div>
        </React.Fragment>
    );
};