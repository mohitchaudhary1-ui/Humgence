export default function Banner() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

        </section>
    );
}