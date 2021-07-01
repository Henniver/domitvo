import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../logo_klein.jpg";


export default function Navbar({ links, back}) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const navAnchors = links.map( l =>(
        <AnchorLink 
            href={`${l.href}`} 
            className={`text-md no-underline text-white text-lg hover:text-gold hover:brightness-125 ${navbarOpen ? null : "ml-5"} px-1`}
            key={l.title}
        >
            {`${l.title}`}
        </AnchorLink>
    ));

    const navLinks = links.map( l => (
        <a 
            href={`/${l.href}`} 
            className={`text-md no-underline text-white text-lg hover:text-gold hover:brightness-125 ${navbarOpen ? null : "ml-5"} px-1`}
            key={l.title}
        >
            {`${l.title}`}
        </a>
    ));

    const backLink = <a href="/" className={`text-md no-underline text-white text-lg hover:text-gold hover:brightness-125 ${navbarOpen ? null : "ml-5"} px-1`}>Terug</a>;


    return (

        <nav className="sticky top-0 z-10 shadow flex flex-wrap items-center px-2 py-2 bg-red">
            <div className=" w-full md:px-4 flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <div className="mb-2 sm:mb-0 flex flex-row">
                    <Switch>
                        <Route path={`/`} exact={true} children={
                            <AnchorLink href="#top">
                                <img
                                    src={logo}
                                    className="h-12 mr-2 self-center" 
                                    alt="Domitvo"></img>
                            </AnchorLink>
                        } />
                        <Route>
                            <Link to={`${process.env.PUBLIC_URL}`} >
                                <img 
                                    src={logo}
                                    className="h-12 mr-2 self-center" 
                                    alt="domitvo"></img>
                            </Link>
                        </Route>
                    </Switch>
                </div>
                <button
                    className="text-white cursor-pointer leading-none p-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-6">
                        <path d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1C20 1.26522 19.8946 1.51957 19.7071 1.70711C19.5196 1.89464 19.2652 2 19 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1Z" fill="#ae9a65"/>
                        <path d="M0 7.03198C0 6.76677 0.105357 6.51241 0.292893 6.32488C0.48043 6.13734 0.734784 6.03198 1 6.03198H19C19.2652 6.03198 19.5196 6.13734 19.7071 6.32488C19.8946 6.51241 20 6.76677 20 7.03198C20 7.2972 19.8946 7.55155 19.7071 7.73909C19.5196 7.92663 19.2652 8.03198 19 8.03198H1C0.734784 8.03198 0.48043 7.92663 0.292893 7.73909C0.105357 7.55155 0 7.2972 0 7.03198Z" fill="#ae9a65"/>
                        <path d="M1 12.064C0.734784 12.064 0.48043 12.1693 0.292893 12.3569C0.105357 12.5444 0 12.7987 0 13.064C0 13.3292 0.105357 13.5835 0.292893 13.7711C0.48043 13.9586 0.734784 14.064 1 14.064H19C19.2652 14.064 19.5196 13.9586 19.7071 13.7711C19.8946 13.5835 20 13.3292 20 13.064C20 12.7987 19.8946 12.5444 19.7071 12.3569C19.5196 12.1693 19.2652 12.064 19 12.064H1Z" fill="#ae9a65"/>
                    </svg>
                </button>
                </div>
                <div
                    className={"lg:flex flex-grow justify-end" +(navbarOpen ? " flex flex-col items-start my-2" : " items-center hidden")}
                    id="example-navbar-danger"
                >
                    {back ? [...navLinks, backLink] : navAnchors}
                </div>
            </div>
        </nav>
   
    );
}
