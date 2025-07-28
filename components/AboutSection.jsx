export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <video controls className="rounded shadow w-full">
          <source src="/office-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          Empowering Businesses with Custom Solutions
        </h2>
        <p className="text-lg mb-4">
          At OZRIT, we specialize in crafting innovative applications and software that help businesses thrive in a digital-first world.
        </p>
        <p className="text-lg mb-4">
          Our solutions are tailored to meet your unique needs, driving growth, efficiency, and lasting success through cutting-edge technology and expert execution.
        </p>
        <h3 className="font-semibold text-xl mb-2">Our Mission</h3>
        <p className="text-lg">
          To enable businesses to outpace competition through innovative technology, intuitive design and data-driven marketing—delivered with transparency, agility and unwavering commitment to quality.
        </p>
      </div>
    </section>
  );
}
