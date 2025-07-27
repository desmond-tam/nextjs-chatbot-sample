export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <p className="mb-8 text-lg text-gray-600">
      Questions, feedback, or collaboration ideas? Drop us a message below—we’ll respond as soon as possible.
    </p>

    <form className="grid grid-cols-1 gap-6 bg-white rounded-md shadow-sm p-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows={5} required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
      </div>

      <button type="submit"
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">
        Send Message
      </button>
    </form>

    <div className="mt-8 text-sm text-gray-500">
      <p>This form does not store sensitive data. For secure messaging or admin support, please log in using MSAL.</p>
    </div>
  </div>
</div>

    )
}