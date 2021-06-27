export default function Section({title, children}) {
    return (
        <section className="flex flex-col justify-center items-center mx-5vw my-10vh">
            <h1 className="mb-8">{title}</h1>
            {children}
        </section>
    )
};