import logo from "../logo_klein.jpg";

export default function Navbar({links}) {
    const navLinks = links.map( l =>(
        <a 
            href={`${l.href}`} 
            className="text-md no-underline text-white text-lg hover:text-gold hover:brightness-125 ml-5 px-1"
            key={l.title}
        >
            {`${l.title}`}
        </a>
    ));

    return(
        <nav className="font-sans bg-red flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 h-16 sticky top-0 z-10 text-2xlshadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 flex flex-row">
                <img 
                    className="w-20 mr-2 self-center" 
                    src={logo}
                    alt="Domitvo-logo"     
                />
            </div>
            <div className="sm:mb-0 self-center">
                {navLinks}
            </div>
        </nav>
    )
};