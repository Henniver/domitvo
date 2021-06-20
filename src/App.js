import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import SectionContent from './components/SectionContent';
import het_bier from "./het_bier.jpg";
import ons_verhaal1 from "./ons_verhaal1.jpg";
import ons_verhaal2 from "./ons_verhaal2.JPG";
import total from "./total.svg";
import ajpopoli from "./ajpopoli.JPG";
import ajpopoli2 from "./ajpopoli2.JPG";
import { text, navLinks } from "./data";
import HoeWerktHet from './components/HoeWerktHet';
import React from 'react';
import SteunOns from './components/SteunOns';

export default function App() {

  return (
    <div className="App">
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
            <Section title={"Hoe Werkt Het?"}>
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

        {/* <Section title={"Steun Ons"}>
            <div 
                className="flex flex-col justify-center items-left text-justify bg-cover bg-top px-12 py-5"
                style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${ajpopoli})`}}
            >
                {
                    text.ajpopoli.map( (par, idx) => (
                        <p 
                            key={`${par}-${idx}`}
                            className="text-white"
                        >
                            {par}
                        </p>
                    ))
                }
            </div>
        </Section> */}
        <Footer />
    </div>
  );
}

