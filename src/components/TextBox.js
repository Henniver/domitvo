import LinkToBtn from "./LinkToBtn";

export default function TextBoxBeer({text, showBtn}) {
    return(
        <div className="flex flex-col justify-center items-center text-justify lg:w-50vw md:px-5">
            {
                text.map( (par, idx) => (
                    <p key={`${par}-${idx}`}>
                        {par}
                    </p>
                ))
            }
            <table className="w-full mb-5 font-normal">
                <tbody className="font-normal">
                    <tr>
                        <th className="font-normal w-64 sm:w-auto text-left ">Krat tripel 9° met 12 flesjes van 33cl</th>
                        <td className="text-right">€ 30</td>
                    </tr>
                    <tr>
                        <th className="font-normal text-left ">Statiegeld houten krat*	</th>
                        <td className="text-right">€ 10</td>
                    </tr>
                    <tr>
                        <td className="text-xs text-left ">* Het statiegeld wordt teruggestort na het terugbrengen van het krat.</td>
                    </tr>
                </tbody>
            </table>
            {
                showBtn ? <LinkToBtn href="/bestel" text={"Bestel hier"} /> : null
            }
        </div>
    );
};