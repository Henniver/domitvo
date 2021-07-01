import AnchorLink from "react-anchor-link-smooth-scroll";
import banner from "../banner.jpg";
import LinkToBtn from "./LinkToBtn";
import logo from "../logo_klein.jpg";

export default function Banner({text, handleShowModal}) {
    return(
    <div className="banner bg-cover bg-top flex justify-center items-start relative" 
        style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${banner})`}}
    >
        <div className="container text-left px-5vw py-10vh sm:py-15vh">
            <h1 className="m-0 text-white text-4xl font-extrabold mb-6 "><strong>DE OUDE MARKT IS TERUG VAN ONS!</strong></h1>
            <div className="mb-10">
                {
                    text.map( par => (
                        <p 
                            className=" text-lg sm:text-xl text-white mb-4 leading-relaxed"
                            key={`${par.slice(0,3)}`}
                        >
                            {`${par}`}
                        </p>
                    ))
                }
            </div>
            <button
                className="bg-gold text-white py-3 text-base sm:text-lg px-6 mr-3 sm:mr-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out"
            >
                <AnchorLink 
                    href={"#Het Bier"}
                    className="text-base sm:text-lg"
                >
                    Lees Meer
                </AnchorLink>
            </button>
            <LinkToBtn href={`${process.env.PUBLIC_URL}/bestel`} text={"Bestel hier"} />
        </div>
        <img 
            className="hidden sm:inline-block sm:h-32 lg:h-48 self-center absolute bottom-0 right-0 opacity-90" 
            src={logo}
            alt="Domitvo-logo"     
        />
    </div>

    )
};