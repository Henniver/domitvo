export default function Section({title, children}) {
    return (
        <section className="flex flex-col justify-center items-center">
            <h1>{title}</h1>
            {children}
        </section>
    )
};