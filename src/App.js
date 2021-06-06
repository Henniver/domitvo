import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import SectionContent from './components/SectionContent';

export default function App() {

    const lorem ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    const navLinks = [
        {
            title: "Het Bier",
            href: "/",
        },
        {
            title: "Ons Verhaal",
            href: "/",
        },
        {
            title: "Steun Ons",
            href: "/",
        },
        {
            title: "Contact",
            href: "/",
        },
    ];

  return (
    <div className="App">
        <Navbar links={navLinks}/>
        <Banner />
        <main className="container text-center mx-auto my-10">
            <Section title={"Het Bier"}>
                <SectionContent textSide={"right"} text={lorem}  title={"Lorem Ipsum"} />
                <SectionContent textSide={"left"} text={lorem}  title={"Lorem Ipsum"} />
            </Section>
            <Section title={"Ons Verhaal"}>
                <SectionContent textSide={"right"} text={lorem} title={"Lorem Ipsum"} />
            </Section>
            <Section title={"Steun Ons"}>
             <div className="mx-52 text-justify">
                {lorem}
             </div>
            </Section>
        </main>
        <Footer />
    </div>
  );
}

