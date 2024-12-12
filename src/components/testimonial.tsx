import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Darmawan",
    role: "CEO at CIMB NIAGA BANK",
    content:
      "An excellent developer who delivers high-quality work consistently.",
    image: "/pf.jpg?height=100&width=100",
  },
  {
    name: "Mrs. Pricilia Sastra",
    role: "Project Manager",
    content:
      "Great communication skills and technical expertise. A pleasure to work with.",
    image: "/pf2.jpg?height=100&width=100",
  },
  {
    name: "Mr. Joe Shandy",
    role: "Product Manager",
    content:
      "Fantastic product. Such an efficient streamlined way to obtain a design. Great bunch of designers. Super happy thanks!",
    image: "/test.jpg?height=100&width=100",
  },

];

export function Testimonial() {
  return (
    <section id="testimonial" className="min-h-screen pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg relative"
            >
              <Quote className="text-blue-500 mb-4" size={32} />
              <p className="text-gray-300 mb-4">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
