export default function Navbar({links}) {

    const navLinks = links.map( l =>(
        <a 
            href={`${l.href}`} 
            className="text-md no-underline text-black hover:opacity-50 ml-5 px-1"
            key={l.title}
        >
            {`${l.title}`}
        </a>
    ));

    return(
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-transparent sticky text-2xlshadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 flex flex-row">
                <img className="h-10 w-10 mr-2 self-center" src="https://csscomps.com/images/csscomps.png" alt="Domitvo-logo" />
            </div>
            <div className="sm:mb-0 self-center">
                {navLinks}
            </div>
        </nav>
    )
};