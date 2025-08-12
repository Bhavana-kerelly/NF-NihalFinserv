'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: 'Structured Loans: Customized Financial Solutions',
    slug: 'structured-loans',
    summary:
      'Explore how tailored structured loans can meet your unique financial needs with flexibility and precision.',
  },
  {
    title: 'Your Trusted Financial Partner',
    slug: 'financial-partner',
    summary:
      'Discover how Nihal Finserv empowers clients across all walks of life with reliable loan advisory services.',
  },
  {
    title: 'Driven by Values, Focused on You',
    slug: 'driven-by-values',
    summary:
      'Understand Nihal Finserv’s core values and why ethics and transparency are central to our approach.',
  },
  {
    title: 'Loans for Doctors and CAs',
    slug: 'loans-for-doctors-cas',
    summary:
      'Specialized loan solutions crafted for professionals like Chartered Accountants and Medical Practitioners.',
  },
];

export default function BlogPage() {
  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-white py-20 px-6 relative overflow-hidden font-serif">
      {/* Abstract Background Animation */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse-slow z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-200 rounded-full blur-2xl opacity-25 animate-pulse-fast z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold text-black mb-6 tracking-tight">
          Financial Insights & Expertise
        </h1>
        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          Dive into our hand-picked financial articles and discover how Nihal Finserv delivers innovative solutions tailored to your journey.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-[#132b4a]/90 backdrop-blur-xl shadow-xl rounded-3xl p-6 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{post.summary}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-white font-semibold hover:underline transition"
            >
              Read More →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
    <Footer/>
    </>
  );
}
