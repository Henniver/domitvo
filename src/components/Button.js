export default function Button({text, btnOnClick}) {
    return(
        <button 
            className=" bg-gold text-white py-3 text-base sm:text-lg px-6 mr-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out"            
            onClick={btnOnClick}
        > 
            {text}
        </button>
    )
};