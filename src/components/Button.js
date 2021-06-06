export default function Button({href, text}) {
    return(
        <a 
            href={href}
            className="border border-solid border-white text-white py-2 px-6 rounded-full font-light opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"            
        > 
        {text}
        </a>
    )
};