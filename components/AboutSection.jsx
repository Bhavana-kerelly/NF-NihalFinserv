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
        <h2 className="text-2xl font-bold mb-5">
          Personal Loans in Hyderabad – Nihal Finserv
        </h2>
        <p className="text-base mb-6">
          Looking for a quick and affordable personal loan in Hyderabad? Nihal Finserv is here to help. We offer personalized loan solutions for salaried and self-employed individuals with competitive interest rates and a smooth, hassle-free process.
        </p>
        <p className="text-base mb-6">
          Whether it’s for medical bills, education, travel, or urgent expenses — we’re committed to making borrowing simple, fast, and transparent.
        </p>
        <p className="text-base">
          Based in Hyderabad, Nihal Finserv is dedicated to supporting your financial needs with trusted service and minimal paperwork.
        </p>
      </div>
    </section>
  );
}
