import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
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

export default function App() {

    return (
        <Router>
        <div className="App">
            <Switch>
                <Route
                    exact
                    path="/"
                >
                        <Navbar links={navLinks}/>
                        <Banner text={text.intro} />
                        <main className="container text-center mx-auto my-10vh">
                            <Section title={"Het Bier"}>
                                <SectionContent 
                                    textSide={"right"}
                                    text={text.bier}
                                    img={het_bier}
                                    showBtn={true}
                                />
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
                                    extraClasses={"mb-10vh"}
                                />
                                <SectionContent 
                                    textSide={"left"} 
                                    text={text.verhaal.slice(2,4)} 
                                    img={ons_verhaal2}
                                />
                            </Section>
                        </main>
                        <Section title="Steun Ons">
                            <SteunOns
                                text={text.ajpopoli}
                                img1={ajpopoli}
                                img2={ajpopoli2}
                                title={"Ajpopoli"}
                            />
                        </Section>
                        <Footer />
                </Route>
                <Route
                    path="/bestel"    
                >
                    <Navbar links={[{title: "Terug", href: "/"}]}/>
                    <main className="container text-center mx-auto my-5vh h-screen">
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

