import { motion } from "framer-motion";

export function AboutMe() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-2 md:items-center"
        >
          <div className="relative mx-auto w-full max-w-md">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-cyan-400">
              <img
                src="/Pasfoto.jpg?height=100&width=100"
                alt="Profile"
                className="h-full w-full object-cover bg-slate-200 transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute -inset-0.5 rounded-full opacity-20"></div>
          </div>

          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-4xl font-bold text-cyan-600 md:text-5xl"
            >
              Holla!
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-lg text-gray-300"
            >
              <h1 className="font-bold text-4xl text-cyan-300">
                I'M AHMAD IDRUS
              </h1>
              <p className="text-cyan-600">
                Passionate developer with expertise in modern web technologies.
                I love creating beautiful and functional web applications
              </p>
              <p className="text-cyan-600">
                With a strong foundation in React, TypeScript, and modern CSS
                frameworks, I bring ideas to life through clean and efficient
                code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex justify-center gap-4 md:justify-start"
            >
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#portfolio"
                className="rounded-full border border-blue-400/20 px-6 py-3 font-semibold text-blue-400 transition-transform hover:scale-105"
              >
                View Work
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
