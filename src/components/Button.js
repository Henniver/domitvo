export default function Button({href, text}) {
    return(
        <a 
            href={href}
            className=" bg-gold text-white py-3 text-lg px-6 mr-6 rounded-full transform hover:scale-110 filter hover:brightness-125 transition duration-300 ease-in-out"            
        > 
        {text}
        </a>
    )
};