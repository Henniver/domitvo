import TotalOpeningsuren from "./TotalOpeningsUren"

export default function HoeWerktHet({text, img}) {
    return(
        <div className="flex flex-col lg:flex-row relative lg:w-70vw lg:px-5 ">
           <ol className="flex flex-col text-left lg:h-70vh">
                {
                    text.slice(0,4).map( (par, idx) => (
                        <li key={par.slice(0,4)} className="flex items-center lg:px-3 h-32 lg:h-1/4">
                            <div className="h-12 w-12 mr-3 lg:mx-3 rounded-full bg-gold text-white flex justify-center items-center text-xl">
                                <p className="text-xl">{idx + 1}</p>
                            </div>
                            <p className="w-5/6">{par}</p>
                        </li>
                    ))
                }
            </ol>
            <ol className="flex flex-col text-left h-70vh">
                {
                    text.slice(4,7).map( (par, idx) => (
                        <li key={par.slice(0,5)} className="flex items-center py-3 h-32  lg:h-1/4">
                            <div className="h-12 w-12 mr-3 lg:mx-3 rounded-full bg-gold text-white flex justify-center items-center text-xl">
                                <p className="text-xl">{idx + 5}</p>
                            </div>
                            <p className="w-5/6">{par}</p>
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