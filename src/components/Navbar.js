import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../logo_klein.jpg";

export default function Navbar({links, back}) {
    
    const navAnchors = links.map( l =>(
        <AnchorLink 
            href={`${l.href}`} 
            className="text-md no-underline text-white text-lg hover:text-gold hover:brightness-125 ml-5 px-1"
            key={l.title}
        >
            {`${l.title}`}
        </AnchorLink>
    ));

    const navLinks = links.map( l =>(
        <a 
            href={`/${l.href}`} 
            className="text-md no-underline text-white text-lg hover:text-gold hover:brightness-125 ml-5 px-1"
            key={l.title}
        >
            {`${l.title}`}
        </a>
    ));

    return(
        <nav className="font-sans bg-red flex text-center content-center sm:flex-row sm:text-left justify-between py-2 px-6 h-16 sticky top-0 z-10 text-2xl shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 flex flex-row">
                   <Switch>
                        <Route path={`${process.env.PUBLIC_URL}`} exact={true} children={
                            <AnchorLink href="#top">
                                <img
                                    src={logo}
                                    alt="Domitvo"></img>
                            </AnchorLink>
                        } />
                        <Route>
                            <Link to={`${process.env.PUBLIC_URL}`} >
                                <img 
                                    src={logo}
                                    alt="domitvo"></img>
                            </Link>
                        </Route>
                    </Switch>
                <img 
                    className="h-12 mr-2 self-center" 
                    src={logo}
                    alt="Domitvo-logo"     
                />
            </div>
            <div className="sm:mb-0 self-center">
                <div className="hidden sm:inline-block ">
                    {back ? navLinks : navAnchors}
                </div>
                { back ? <a href="/" className="text-md no-underline text-white text-lg hover:text-gold hover:brightness-125 ml-5 px-1">Terug</a> : null}
            </div>
        </nav>
    )
};
