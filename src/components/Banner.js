import Button from "./Button";
import banner from "../banner2.jpeg";

export default function Banner({text}) {
    return(
    <div className="banner bg-cover bg-top flex justify-center items-start" 
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${banner})`}}
    >
        <div className="container text-left px-5vw py-16">
            <h1 className="m-0 text-white text-4xl font-extrabold mb-6 "><strong>DE OUDE MARKT IS TERUG VAN ONS!</strong></h1>
            <div className="mb-10">
                {
                    text.map( par => (
                        <p 
                            className="text-xl text-white mb-4 leading-relaxed"
                            key={`${par.slice(0,3)}`}
                        >
                            {`${par}`}
                        </p>
                    ))
                }
            </div>
            <Button href={"/"} text={"Lees Meer"}/>
            <Button href={"/"} text={"Bestel hier"}/>
        </div>
    </div>

    )
};