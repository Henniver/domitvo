import { useState } from "react";
import { pricePerCrate } from "../data";

export default function BestelFormulier() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        nrOfCrates: "",
        pickUpLocation: "",
        remarks: "",
    });

    const setValue = fieldName => evt => {
        setState( prevState => ({ ...prevState, [fieldName]: evt.target.value }))
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submitting", state);
    }
    
    const totalPrice = state.nrOfCrates*pricePerCrate;

    return(
        <form 
            className="bg-white text-left mb-4 max-w-md mx-auto"
            onSubmit={handleSubmit}
            id="order-form"
        >
            <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstName"
                >
                    Voornaam
                </label>
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="text"
                    id="firstName"
                    onChange={setValue("firstName")}
                    value={state.firstName}
                />
            </div>
            <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                >
                    Achternaam
                </label>
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="text"
                    id="lastName"
                    onChange={setValue("lastName")}
                    value={state.lastName}
                />
            </div>
            <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email Adres
                </label>
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="email"
                    id="email"
                    onChange={setValue("email")}
                    value={state.email}
                />
            </div>
            <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="nrOfCrates"
                >
                    Aantal bakken
                </label>
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="number"
                    min={0}
                    id="nrOfCrates"
                    onChange={setValue("nrOfCrates")}
                    value={state.nrOfCrates}
                />
            </div>
            <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="price"
                >
                    Prijs (incl. leeggoed t.w.v. €10 per krat)
                </label>
                <input
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    type="text"
                    id="price"
                    value={`€ ${totalPrice || 0}` }
                    disabled
                />
            </div>
            <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="pickUpLocation"
                >
                    Afhaalkeuze
                </label>
                <select
                    className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 form-select block w-full mt-1 leading-normal"
                    id="pickUpLocation"
                    value={state.pickUpLocation}
                    onChange={setValue("pickUpLocation")}
                >
                    <option value="">-Maak uw keuze-</option>
                    <option value="Bart">via Bart</option>
                    <option value="Piet">via Piet</option>
                    <option value="Kris">via Kris</option>
                    <option value="Johan">via Johan</option>
                    <option value="TotalEnergies Winksele">TotalEnergies Winksele</option>
                </select>
            </div>
            <div className="m-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="remarks"
                >
                    Opmerkingen
                </label>
                <textarea
                    className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                    id="remarks"
                    onChange={setValue("remarks")}
                    value={state.remarks}
                    rows={4}
                ></textarea>
            </div>
            <div className="m-4 flex justify-center">
                <input
                    className=" bg-gold cursor-pointer text-white py-3 text-lg px-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out"
                    type="submit"
                    value="Verzend bestelling"
                />
            </div>
        </form>
    );
};