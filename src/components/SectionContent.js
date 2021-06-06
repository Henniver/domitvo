export default function SectionContent({textSide, text, title}) {
    

    const textBox = 
        <div className="flex flex-col justify-center items-center m-10 text-justify">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

    return(
        <div className="flex flex-row">
            {textSide === "left" ? textBox : null}
            <img 
                src="https://picsum.photos/600/400" 
                alt={text.title}
                className="mx-20 my-10 rounded-xl"
            ></img>
            {textSide === "right" ? textBox : null}
        </div>
    );
};