export default function Banner() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <img
                src="./banner.jpg"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

        </section>
    );
}