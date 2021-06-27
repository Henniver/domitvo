import './App.css';
import React, { useState } from 'react';
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
import SteunOns from './components/SteunOns';
import FormModal from './components/FormWindow';

export default function App() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <div className="App">
            <Navbar links={navLinks}/>
            <Banner text={text.intro} handleShowModal={handleShowModal} />
            <main className="container text-center mx-auto my-10vh">
                <Section title={"Het Bier"}>
                    <SectionContent 
                        textSide={"right"}
                        text={text.bier}
                        img={het_bier}
                        showBtn={true}
                        handleShowModal={handleShowModal}
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
            <FormModal
                showModal={showModal}
                handleClose={handleClose}
            /> 
            <Footer />
        </div>
    );
}

