import AnchorLink from "react-anchor-link-smooth-scroll";
import banner from "../banner.jpg";
import LinkToBtn from "./LinkToBtn";

export default function Banner({text, handleShowModal}) {
    return(
    <div className="banner bg-cover bg-top flex justify-center items-start" 
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${banner})`}}
    >
        <div className="container text-left px-5vw py-15vh">
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
            <AnchorLink 
                className="bg-gold text-white py-3 text-lg px-6 mr-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out" 
                href={"#Het Bier"} 
            >
                Lees Meer
            </AnchorLink>
            <LinkToBtn href={`${process.env.PUBLIC_URL}/bestel`} text={"Bestel hier"} />
        </div>
    </div>

    )
};