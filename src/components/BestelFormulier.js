import { useState } from "react";
import { pricePerCrate, pricePerSmallCrate, studentDiscount } from "../data";

export default function BestelFormulier() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nrOfCrates: "",
    nrOfSmallCrates: "",
    isStudent: 0,
    pickUpLocation: "",
    remarks: "",
  });

  const setValue = (fieldName) => (evt) => {
    setState((prevState) => ({ ...prevState, [fieldName]: evt.target.value }));
  };

  // const handleSubmit = e => {
  //     e.preventDefault();
  //     console.log("Submitting", state);
  // }

  const totalPrice =
    state.nrOfCrates * pricePerCrate +
    state.nrOfSmallCrates *
      pricePerSmallCrate *
      (1 - state.isStudent * studentDiscount);

  const confirmationMessage =
    state.pickUpLocation === "TotalEnergies Winksele"
      ? `Beste ${state.firstName} ${state.lastName}\n,
Dank voor jouw bestelling.

Zodra je de betaling hebt gedaan van € ${totalPrice} op rekeningnummer BE26 0637 0978 7229 van Deoudemarktisterugvanons met als mededeling "${state.firstName} ${state.lastName}: ${state.nrOfCrates} krat(ten)", krijg je van ons een bevestigingsmail van jouw betaling. Met die mail kan je jouw bier gaan halen bij TotalEnergies Winksele.

Een dikke dank je wel.

Bart, Johan, Kris, Piet en de kinderen van Ajpopoli.`
      : `Beste ${state.firstName} ${state.lastName},

Dank voor jouw bestelling.

Zodra je de betaling hebt gedaan van € ${totalPrice} op rekeningnummer BE26 0637 0978 7229 van Deoudemarktisterugvanons met als mededeling "${state.firstName} ${state.lastName}: ${state.nrOfCrates} krat(ten)", kan je jouw bier gaan ophalen bij ${state.pickUpLocation}.

Een dikke dank je wel,

Bart, Johan, Kris, Piet en de kinderen van Ajpopoli.`;

  return (
    <form
      className="bg-white text-left my-4 max-w-3xl mx-auto"
      action="https://formsubmit.co/0a15e25e7a0ef99fad3d35dd45ac0ce3"
      method="POST"
    >
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstName"
          >
            Voornaam*
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            name="Voornaam"
            id="firstName"
            onChange={setValue("firstName")}
            value={state.firstName}
            required
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastName"
          >
            Achternaam*
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            name="Achternaam"
            id="lastName"
            onChange={setValue("lastName")}
            value={state.lastName}
            required
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Adres*
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="email"
            name="email"
            id="email"
            onChange={setValue("email")}
            value={state.email}
            required
          />
        </div>
        <div className="col-span-6 sm:col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gsm"
          >
            GSM
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            name="GSM Nummer"
            id="phoneNumber"
            onChange={setValue("phoneNumber")}
            value={state.phoneNumber}
          />
        </div>
        <div className="col-span-6 sm:col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nrOfCrates"
          >
            Aantal bakken*
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="number"
            min={0}
            name="Aantal Bakken"
            id="nrOfCrates"
            onChange={setValue("nrOfCrates")}
            value={state.nrOfCrates}
            required
          />
        </div>
        <div className="col-span-6 sm:col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nrOfSmallCrates"
          >
            {"Aantal kleine bakken (4 flesjes)*"}
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="number"
            min={0}
            name="Aantal Kleine Bakken"
            id="nrOfSmallCrates"
            onChange={setValue("nrOfSmallCrates")}
            value={state.nrOfSmallCrates}
            required
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="isStudent"
          >
            {"Bent u student (< 25 jaar)?*"}
          </label>
          <select
            className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 form-select block w-full mt-1 leading-normal"
            name="Bent u student"
            id="isStudent"
            value={state.isStudent}
            onChange={setValue("isStudent")}
            required
          >
            <option value={0}>Neen</option>
            <option value={1}>Ja</option>
          </select>
        </div>
        <div className="col-span-6 sm:col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Prijs (incl. statiegeld )
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="text"
            name="Totale prijs (incl. leeggoed)"
            id="price"
            value={`€ ${totalPrice || 0}`}
            disabled
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pickUpLocation"
          >
            Afhaalkeuze*
          </label>
          <select
            className=" bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 form-select block w-full mt-1 leading-normal"
            name="Afhaalkeuze"
            id="pickUpLocation"
            value={state.pickUpLocation}
            onChange={setValue("pickUpLocation")}
            required
          >
            <option value="">-Maak uw keuze-</option>
            <option value="Bart">via Bart (enkel vrienden of kennissen)</option>
            <option value="Piet">via Piet (enkel vrienden of kennissen)</option>
            <option value="Kris">via Kris (enkel vrienden of kennissen)</option>
            {/* <option value="Johan">
              via Johan (enkel vrienden of kennissen)
            </option> */}
            <option value="TotalEnergies Winksele">
              TotalEnergies Winksele
            </option>
          </select>
        </div>
      </div>
      <div className="my-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="remarks"
        >
          Opmerkingen
        </label>
        <textarea
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          name="Opmerkingen"
          id="remarks"
          onChange={setValue("remarks")}
          value={state.remarks}
          rows={4}
        ></textarea>
      </div>
      <div className="m-4 flex flex-col justify-center items-center">
        <span>
          <p className="text-xs text-red">
            kijk uw gegevens goed na alvorens op verzenden te clicken
          </p>
        </span>
        <input
          className=" bg-gold cursor-pointer text-white py-3 text-lg px-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out"
          type="submit"
          value="Verzend bestelling"
        />
      </div>
      <input type="hidden" name="_subject" value="Nieuwe bestelling!"></input>
      <input
        type="hidden"
        name="_autoresponse"
        value={confirmationMessage}
      ></input>
      <input type="hidden" name="_template" value="table"></input>{" "}
      {/*template for email sent to domitvo@outlook.com*/}
    </form>
  );
}
