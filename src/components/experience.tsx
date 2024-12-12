import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Bank CIMB Niaga",
    period: "2024 - Present",
    description:
      "Developed responsive web applications using React and TypeScript.",
  },
  {
    title: "Logistics Analyst",
    company: "PT Shopee Indonesia",
    period: "2021 - 2024",
    description:
      "Managing and resolving users' related issues and escalations, Handle users' inquiry about lost and damage cases claiming, Following up and notifying the result of the problem solving and service to the customer (order status, shipping process, 3PL stuffs, etc).",
  },
  {
    title: "Live Chat Agent",
    company: "PT Shopee Indonesia",
    period: "2020 - 2021",
    description:
      "Handle users' inquiry about constraint Shopee user dan managing and resolving users by Chat.",
  },
  {
    title: "Purchasing Staff",
    company: "PT Maison Piere",
    period: "2019 - 2020",
    description:
      "Choose products from various vendors offering products, Analyzing good vendors to use, negotiating prices, sampling, and more",
  },
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen pt-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <div className="flex items-center text-gray-300">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
              </div>
              <p className="text-blue-500 mb-2">{exp.company}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
