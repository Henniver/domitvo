import React from "react";

export default function SteunOns({text, img1, img2, title}) {
    return (
        <React.Fragment>
            <div className={`flex flex-row justify-between mb-10vh relative`} key={"subsection-1"}>
                <img 
                    src={img1}
                    alt={title}
                    className="rounded-xl w-50vw"
                    key={"ajpopoli-img-1"}
                ></img>
                <div className="flex flex-col justify-center items-center text-justify w-40vw px-10">
                    {
                        text.slice(0,2).map( (par, idx) => (
                            <p 
                                key={`ajpopoli-1-${idx}`}
                            >
                                {par}
                            </p>
                        ))
                    }
                </div>
            </div>
            <div className={`flex flex-row justify-between mb-10vh`} key={"subsection-2"}>
                <div className="flex flex-col justify-center items-center text-justify w-40vw px-10">
                    {
                        text.slice(2,-1).map( (par, idx) => (
                            <p 
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
                    className="rounded-xl w-50vw"
                    key={"ajpopoli-img-2"}
                ></img>
            </div>
        </React.Fragment>
    );
};