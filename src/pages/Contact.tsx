const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">Contact Us</h1>
      <div className="bg-card rounded-lg p-8 shadow-lg border border-accent/20">
        <p className="text-gray-200 mb-6">
          Have questions or want to get in touch? We'd love to hear from you.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border-accent/20 bg-background text-gray-200 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border-accent/20 bg-background text-gray-200 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-md border-accent/20 bg-background text-gray-200 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              placeholder="Your message"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;