import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 1.2
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: 0.2
    }
  }
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay: 0.4
    }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.1,
      duration: 0.5
    }
  }),
  hover: {
    x: 10,
    color: '#3b82f6', // Tailwind blue-500
    transition: { type: 'spring', stiffness: 500, damping: 20 }
  }
};

export default function Content() {
  const sections = [
    {
      title: 'Secured Loans',
      description: 'We offer secured loans backed by your assets — property, gold, or investments. Enjoy higher approvals, flexible terms, and expert support every step of the way. Secure your future, with a loan you can trust.',
      items: ['Mortage Loans', 'School & College Funding', 'Car Loans Ner & refinancing', 'OD/CC', 'Home Loans'],
    },
    {
      title: 'Unsecured Loans',
      description: 'No collateral? No problem. Get quick access to unsecured loans based on your income and credit profile. Ideal for personal needs, business growth, or unexpected expenses. Fast approvals, flexible EMIs — all with zero asset risk.',
      items: ['Business Instalment Loans', 'Medical Equipment Loans', 'Industrial Machinery Loans', 'Construction Equipment Loans', 'Equipment Refinancing Loans', 'Proffesional Loans', 'Personal Loans', 'Educational Loans'],
    },
    {
      title: 'Term Loans',
      description: 'Looking for long-term funding with structured repayments? Our term loans offer fixed tenure and predictable EMIs to suit your business or personal goals. Whether it’s for expansion, equipment, or working capital — we’ve got the right plan. Grow with confidence, backed by stable and flexible financing.',
      items: ['Short-Term Loans', 'Long-Tern Loans', 'Credit Cards'],
    },
    {
      title: 'Corporate Loans',
      description: 'Power your business growth with tailored corporate loan solutions. From expansion and infrastructure to working capital — we fund what matters. Flexible terms, competitive interest rates, and expert financial guidance. Big visions need bold backing — let’s build it together.',
      items: ['Working Capital', 'Asset Finance', 'Leasing', 'Term Loans', 'Structed Finance'],
    },
    {
      title: 'SME',
      description: 'Fuel your small or medium business with smart SME loan solutions. Quick approvals, minimal documentation, and flexible repayment options. Whether it’s for inventory, machinery, or working capital — we’ve got you covered. Empowering growth for businesses that drive the economy.',
      items: ['Manufacturer', 'Distributor', 'Vendor', 'Service Provider', 'Retailer'],
    },
    {
      title: 'Structured Products',
      description: 'Unlock customized investment solutions with structured products tailored to your risk profile. Blend the security of debt with the growth potential of equity — all in one smart package. Ideal for high-net-worth individuals and businesses seeking optimized returns. Diversify intelligently, grow strategically.',
      items: ['Loan Against Securities', 'Structured Investments', 'Debt Syndication', 'Letter Of Credit', 'Lease Rental Discounting', 'Loan Against Property'],
    },
    {
      title: 'Equipment Financing & Leasing',
      description: 'Upgrade your operations with easy equipment financing and leasing solutions. From machinery to technology, get the tools you need without heavy upfront costs. Flexible tenures, tax benefits, and fast approvals to keep your business moving. Invest in growth — without draining your capital.',
      items: ['Capital Goods', 'IT Hardware', 'Office Infrastructure', 'Cars', 'Construction Equipment', 'Energy Saving Equipment', 'Healthcare Equipment', 'Logistics MAchinery', 'Solar Equipment'],
    },
    {
      title: 'Construction Finance',
      description: 'Build without delays with our tailored construction finance solutions. Designed for builders and developers to fund residential, commercial, or infrastructure projects. Enjoy phased disbursements, expert advisory, and flexible repayment terms. We lay the financial foundation, so you can raise the skyline.',
      items: ['Funding Solutions For Your Construction Projects', 'Securing Land and Sourcing Raw Materials', 'Paying Contractors and Workers', 'Acquiring Permits and Licenses'],
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {sections.map((section, sectionIndex) => (
          <Section key={sectionIndex} sectionIndex={sectionIndex} totalSections={sections.length} {...section} />
        ))}
      </div>
    </div>
  );
}

const Section = ({ title, description, items, sectionIndex, totalSections }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger animation when 10% of the section is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className="grid lg:grid-cols-3 gap-12 items-start"
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      {/* Left side - Title and Description */}
      <div className="lg:col-span-1 space-y-6">
        <motion.div
          className="flex items-center space-x-3 mb-4"
          variants={textVariants}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </div>
        </motion.div>
        <motion.h2
          className="text-5xl font-bold text-black leading-tight"
          variants={titleVariants}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-black text-base leading-relaxed"
          variants={textVariants}
        >
          {description}
        </motion.p>
      </div>

      {/* Right side - Services List */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
        {items.reduce((acc, item, index) => {
          const colIndex = index % 2;
          if (!acc[colIndex]) {
            acc[colIndex] = [];
          }
          acc[colIndex].push(item);
          return acc;
        }, [[], []]).map((column, colIndex) => (
          <div key={colIndex} className="space-y-4">
            {column.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                className="flex items-center space-x-3 cursor-pointer"
                variants={listItemVariants}
                custom={itemIndex}
                whileHover="hover"
              >
                <motion.svg
                  className="w-5 h-5 text-gray-800"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  variants={{
                    hover: { x: 5 }
                  }}
                >
                  <polyline points="9,18 15,12 9,6"></polyline>
                </motion.svg>
                <motion.span
                  className="text-lg text-gray-800"
                  variants={{
                    hover: { x: 5 }
                  }}
                >
                  {item}
                </motion.span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
      {sectionIndex < totalSections - 1 && (
        <hr className="my-12 border-t border-gray-300 lg:col-span-3" />
      )}
    </motion.div>
  );
};