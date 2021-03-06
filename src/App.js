import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Banner from './components/Banner';
import Section from './components/Section';
import SectionContent from './components/SectionContent';
import HoeWerktHet from './components/HoeWerktHet';
import SteunOns from './components/SteunOns';
import Footer from './components/Footer';
import het_bier from "./het_bier.jpg";
import ons_verhaal1 from "./ons_verhaal1.jpg";
import ons_verhaal2 from "./ons_verhaal2.JPG";
import total from "./total.svg";
import ajpopoli from "./ajpopoli.JPG";
import ajpopoli2 from "./ajpopoli2.JPG";
import { text, navLinks } from "./data";
import BestelFormulier from './components/BestelFormulier';
import TextBoxBeer from './components/TextBox';

export default function App() {

    return (
        <Router>
        <div className="App">
            <Switch>
                <Route
                    exact
                    path="/"
                >
                    <span id="top"></span> {/* dummy element for navigation */}
                    <Navbar links={navLinks} />
                    <Banner text={text.intro} />
                    <main className="container flex flex-col items-center text-center mx-auto">
                        <Section title={"Het Bier"}>
                            <div className={`flex flex-col lg:flex-row justify-between`}>
                                <img 
                                    src={het_bier}
                                    alt={text.title}
                                    className="rounded-xl w-full lg:w-40vw lg:max-w-50 my-4 lg:my-0"
                                >
                                </img>
                                <TextBoxBeer text={text.bier} showBtn={true} />
                            </div>
                        </Section>
                        <Section title={"Hoe Het Werkt"}>
                            <HoeWerktHet 
                                text={text.hoewerkthet} 
                                img={total}    
                            />
                        </Section>
                        <Section title={"Ons Verhaal"}>
                            <SectionContent 
                                textSide={"right"}
                                text={text.verhaal.slice(0,2)} 
                                img={ons_verhaal1}
                                extraClasses={"lg:mb-5vh"}
                            />
                            <SectionContent 
                                textSide={"left"} 
                                text={text.verhaal.slice(2,3)} 
                                img={ons_verhaal2}
                                part2={true}
                            />
                        </Section>
                        <Section title="Steun Ons">
                            <SteunOns
                                text={text.ajpopoli}
                                img1={ajpopoli}
                                img2={ajpopoli2}
                                title={"Ajpopoli"}
                            />
                        </Section>
                    </main>
                    <Footer />
                </Route>
                <Route
                    exact
                    path={`/bestel`} 
                >
                    <Navbar links={navLinks} back={true} />
                    <main className="container text-center mx-auto my-5vh h-auto">
                        <section className="flex flex-col justify-center mx-5vw">
                            <h1>Bestel</h1>
                            <div>
                                <BestelFormulier />
                            </div>
                        </section>
                    </main>
                    <Footer />
                </Route>
            </Switch>
        </div>
        </Router>
    );
}

