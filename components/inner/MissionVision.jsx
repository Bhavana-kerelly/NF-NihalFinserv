"use client";

export default function VisionMission() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto font-serif">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl text-black text-center mb-16">
          Our Vision & Mission
        </h2>

        {/* Cards */}
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
          {/* Vision Card */}
          <div className="flex-1 bg-white border border-black rounded-lg p-10 text-center">
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Vision</h3>
            <p className="text-black text-lg leading-relaxed">
              To become a leading financial solutions provider that fosters long-term financial growth, trust, and empowerment for individuals and enterprises.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex-1 bg-white border border-black rounded-lg p-10 text-center">
            <div className="flex justify-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m4.5 6h-9A2.5 2.5 0 016 18.5v-13A2.5 2.5 0 018.5 3h7A2.5 2.5 0 0118 5.5v13a2.5 2.5 0 01-2.5 2.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Mission</h3>
            <p className="text-black text-lg leading-relaxed">
              To deliver efficient, ethical, and innovative lending solutions by offering personalized financial services that help our clients grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}