export default function Section({title, children}) {
    return (
        <section className="flex flex-col justify-center items-center mx-5vw border-2 border-solid border-black max-w-screen-xl">
            <h1 className="mb-8 pt-16" id={title}>{title}</h1>
            {children}
        </section>
    )
};