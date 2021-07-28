import React from "react";
import LinkToBtn from "./LinkToBtn";

export default function SteunOns({ text, img1, img2, title }) {
  return (
    <React.Fragment>
      <div
        className={`flex flex-col lg:flex-row justify-center lg:mb-5vh relative`}
        key={"subsection-1"}
      >
        <img
          src={img1}
          alt={title}
          className="rounded-xl my-4 lg:my-0 lg:w-50vw lg:max-w-50"
          key={"ajpopoli-img-1"}
        ></img>
        <div className="flex flex-col lg:justify-center lg:items-center text-justify lg:w-40vw lg:pl-10">
          <p className="my-2">
            De opbrengsten van de verkoop van het bier gaat integraal naar{" "}
            <a
              className="text-gold hover:underline"
              href="https://www.ajpopoli.com"
              rel="noopener noreferrer"
            >
              vzw Ajpopoli
            </a>
            .
          </p>
          {text.slice(1, 3).map((par, idx) => (
            <p className="my-2" key={`ajpopoli-1-${idx}`}>
              {par}
            </p>
          ))}
        </div>
      </div>
      <div
        className={`flex flex-col lg:flex-row justify-center mb-8 lg:mb-16`}
        key={"subsection-2"}
      >
        <div className="flex flex-col lg:justify-center lg:items-center text-justify lg:w-40vw lg:pr-10">
          {text.slice(3, 5).map((par, idx) => (
            <p
              className="my-2"
              key={`ajpopoli-2-${idx}`}
              id={`ajpopoli-2-${idx}`}
            >
              {par}
            </p>
          ))}
          <div className="w-full flex justify-center my-4">
            <LinkToBtn
              href={`${process.env.PUBLIC_URL}/bestel`}
              text={"Bestel hier"}
            />
          </div>
          {text.slice(5, -1).map((par, idx) => (
            <p
              className="my-2"
              key={`ajpopoli-2-${idx}`}
              id={`ajpopoli-2-${idx}`}
            >
              {par}
            </p>
          ))}
          <p>
            Wil je meer weten over Ajpopoli en zijn werking, bezoek{" "}
            <a
              className="text-gold hover:underline"
              href="https://www.ajpopoli.com"
              rel="noopener noreferrer"
            >
              www.ajpopoli.com
            </a>{" "}
            en steun ons. Contacteer Piet Vermeersch via Ajpopoli en word
            peetouder zoals Johan, Kris en Bart.
          </p>
        </div>
        <img
          src={img2}
          alt={title}
          className="rounded-xl my-4 lg:my-0 lg:w-50vw lg:max-w-50"
          key={"ajpopoli-img-2"}
        ></img>
      </div>
    </React.Fragment>
  );
}
