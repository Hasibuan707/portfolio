import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="min-h-screen pt-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-white">
        Get In Touch
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10">
              <Mail className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-gray-400">idrushasibuan20.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10">
              <Phone className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Phone</h3>
              <p className="text-gray-400">+62 8521 3108 507</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10">
              <MapPin className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Location</h3>
              <p className="text-gray-400">BSD, South Tangerang</p>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-lg bg-gray-800/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg bg-gray-800/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-lg text-red-50 bg-gray-800/50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
