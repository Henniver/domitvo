import TotalOpeningsuren from "./TotalOpeningsUren"

export default function HoeWerktHet({text, img}) {
    return(
        <div className="flex justify-center relative">
           <ol className="flex flex-col text-left h-70vh mx-5">
                {
                    text.slice(0,4).map( (par, idx) => (
                        <li key={par.slice(0,4)} className="flex items-center py-3 col-span-1">
                            <div className="h-12 w-12 mx-3 rounded-full bg-gold text-white flex justify-center items-center text-xl">
                                <p className="text-xl">{idx + 1}</p>
                            </div>
                            <p className="w-35vw">{par}</p>
                        </li>
                    ))
                }
            </ol>
            <ol className="flex flex-col text-left h-70vh mx-5">
                {
                    text.slice(4,7).map( (par, idx) => (
                        <li key={par.slice(0,5)} className="flex items-center py-3 flex-wrap col-span-2">
                            <div className="h-12 w-12 mx-3 rounded-full bg-gold text-white flex justify-center items-center text-xl">
                                <p className="text-xl">{idx + 5}</p>
                            </div>
                            <p className="w-35vw">{par}</p>
                        </li>
                    ))
                }
                <TotalOpeningsuren img={img}/>
            </ol>
            {/* <ol className=" flex flex-col flex-wrap text-left h-70vh">
                {
                    text.map( (par, idx) => (
                        <li key={par.slice(0,5)} className="flex items-center py-3">
                            <div className="h-12 w-12 mx-3 rounded-full bg-gold text-white flex justify-center items-center text-xl">
                                <p className="text-xl">{idx + 1}</p>
                            </div>
                            <p className="w-30vw">{par}</p>
                        </li>
                    ))
                }
                <TotalOpeningsuren img={img}/>
            </ol> */}
        </div>
    );
};