export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-800">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h2 className="text-3xl font-bold mb-4">About This Chatbot</h2>
    <p className="mb-6 text-lg leading-relaxed">
      This chatbot is designed to deliver secure, smart, and compliant interactions—whether you're exploring technical guidance, strategy tips, or creative problem-solving. Built with Next.js and Tailwind CSS, it’s fast, accessible, and designed for reputational safety.
    </p>

    <div className="grid md:grid-cols-2 gap-6 mb-10">
      <div>
        <h3 className="text-xl font-semibold mb-2">What It Can Do</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Answer technical queries with architectural precision</li>
          <li>Support secure token workflows and SSR boundaries</li>
          <li>Generate UI ideas, layouts, and mock components</li>
          <li>Help refine messaging and strategic positioning</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Built With</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Next.js App Router with server-side rendering</li>
          <li>Tailwind CSS for responsive design and theming</li>
          <li>MSAL + Entra ID for secure authentication</li>
          <li>Azure APIs and serverless workflows</li>
        </ul>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md p-6 shadow-sm">
      <h4 className="text-lg font-semibold mb-2">Trusted by Technical Architects & Strategists</h4>
      <p className="text-sm text-gray-700">
        Whether you're building enterprise-grade apps or navigating secure onboarding flows, this chatbot aligns with best practices in compliance and auditability. It's not just an assistant—it's an extension of your technical leadership.
      </p>
    </div>
  </div>
</div>

    )
}