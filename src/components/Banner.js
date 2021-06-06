import Button from "./Button";

export default function Banner() {
    return(
    <div className="bg-cover bg-center py-36 " 
        style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/background.png)"}}
    >
        <div className="container text-left px-24 h-screen">
            <h1 className="m-0 text-white drop-shadow-sm text-3xl font-bold "><strong>DE OUDE MARKT IS TERUG VAN ONS!</strong></h1>
            <p className="text-xl text-white text-opacity-70 drop-shadow-sm mb-4">Het is niet alleen een vrolijke uitroep, het is vanaf nu ook een nieuw bier. En wat voor één: een lekkere ambachtelijke tripel van 9° 
            waarmee je ook nog eens een goed doel steunt. Je leest het goed: genieten van een heerlijk biertje en weten dat je daarmee kinderen in Guatemala 
            een kans geeft op beter onderwijs, waar wacht je nog op?</p>
            <Button href={"/"} text={"Lees Meer"}/>
            <Button href={"/"} text={"Bestel hier"}/>
        </div>
    </div>

    )
};