import LinkToBtn from "./LinkToBtn";

export default function TextBoxBeer({text, showBtn}) {
    return(
        <div className="flex flex-col justify-center items-center text-justify w-50vw px-5 border-2 border-solid border-black">
            {
                text.map( (par, idx) => (
                    <p key={`${par}-${idx}`}>
                        {par}
                    </p>
                ))
            }
            <table className="text-left w-full mb-5 font-normal">
                <tbody className="font-normal">
                    <tr>
                        <th className="font-normal">Krat tripel 9° met 12 flesjes van 33cl</th>
                        <td>€ 30</td>
                    </tr>
                    <tr>
                        <th className="font-normal">Statiegeld houten krat*	</th>
                        <td>€ 10</td>
                    </tr>
                    <tr>
                        <td className="text-xs">* Het statiegeld wordt teruggestort na het terugbrengen van het krat.</td>
                    </tr>
                </tbody>
            </table>
            {
                showBtn ? <LinkToBtn href="/bestel" text={"Bestel hier"} /> : null
            }
        </div>
    );
};