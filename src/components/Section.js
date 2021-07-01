export default function Section({title, children}) {
    return (
        <section className="flex flex-col justify-center md:items-center mx-5vw max-w-screen-xl">
            <h1 className="md:mb-8 pt-10 md:pt-16" id={title}>{title}</h1>
            {children}
        </section>
    )
};