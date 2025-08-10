export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white text-black flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/2">
        <img
          src="/images/About.jpg" // Replace with your actual image path
          alt="Office"
          className="rounded shadow object-cover w-full h-[300px] md:h-[400px]"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xlfont-bold mb-5">
          Personal Loans in Hyderabad – Nihal Finserv
        </h2>
        <p className="text-sm md:text-base mb-6 leading-relaxed">
          Looking for a quick and affordable personal loan in Hyderabad? Nihal Finserv is here to help. We offer personalized loan solutions for salaried and self-employed individuals with competitive interest rates and a smooth, hassle-free process.
        </p>
        <p className="text-sm md:text-base mb-6 leading-relaxed">
          Whether it’s for medical bills, education, travel, or urgent expenses — we’re committed to making borrowing simple, fast, and transparent.
        </p>
        <p className="text-sm md:text-base mb-6 leading-relaxed">
          Based in Hyderabad, Nihal Finserv is dedicated to supporting your financial needs with trusted service and minimal paperwork.
        </p>
      </div>
    </section>
  );
}
