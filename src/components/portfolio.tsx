import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and TypeScript",
    image: "/project.jpg?height=200&width=300",
    github: "https://github.com/Hasibuan707",
    demo: "https://modern-web.dev/",
  },
  {
    title: "Project 2",
    description: "An e-commerce platform using Next.js and Tailwind CSS",
    image: "/project2.jpg?height=200&width=300",
    github: "https://github.com/Hasibuan707",
    demo: "https://www.shopify.com",
  },
  {
    title: "Project 3",
    description:
      "create landing page for bakery company with react tailwindcss",
    image: "/roti.jpg?height=200&width=300",
    github: "https://github.com/Hasibuan707",
    demo: "https://sariroti.com/",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="min-h-screen pt-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-white mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="text-white hover:text-blue-500 transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.demo}
                    className="text-white hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
