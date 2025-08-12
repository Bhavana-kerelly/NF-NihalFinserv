import React from "react";

export default function CoreValuesSection() {
  return (
    <section className="bg-[#132b4a] text-white px-8 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
            Our Core Values
          </h4>
          <h2 className="text-5xl font-bold leading-tight mb-4">
            Nihal Finserv -<br />
            <span className="text-gray-400">Where Your</span> <br />
            <span className="text-red-500">Goals</span>{" "}
            <span className="text-gray-500">Come First</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-md">
            Your dreams are not just numbers - they are plans, futures, and possibilities.
          </p>
          <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
            <span className="text-red-500">&#8213;</span> Get In Touch
          </button>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div className="border border-gray-700 p-6">
            <h3 className="text-2xl font-semibold mb-2">Transparency</h3>
            <p className="text-gray-400">
              We maintain absolute honesty in our offerings, ensuring you always know what you're getting — no hidden charges, no false promises.
            </p>
          </div>
          <div className="border border-gray-700 p-6">
            <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-400">
              Your trust matters. We do what’s right, even when no one’s watching.
            </p>
          </div>
          <div className="border border-gray-700 p-6">
            <h3 className="text-2xl font-semibold mb-2">Customer-Centricity</h3>
            <p className="text-gray-400">
              Every solution we offer is designed with your unique financial needs in mind.
            </p>
          </div>
          <div className="border border-gray-700 p-6">
            <h3 className="text-2xl font-semibold mb-2">Speed & Efficiency</h3>
            <p className="text-gray-400">
              From application to disbursement, we value your time and work to accelerate the process without compromising on quality.
            </p>
          </div>
          <div className="border border-gray-700 p-6">
            <h3 className="text-2xl font-semibold mb-2">Partnership</h3>
            <p className="text-gray-400">
              We grow with our customers and partners. Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}