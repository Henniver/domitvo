export default function LinkToBtn({text, href}) {
    return(
        <button
            className=" bg-gold text-white py-3 text-base sm:text-lg px-6 mr-3 max-w-max sm:mr-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out"  
        >
            <a href={href}> 
            {text}
            </a>
        </button>
    )
};