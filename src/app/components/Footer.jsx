
import Link from 'next/link';
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 text-sm mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-y-4">
                <div className="text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} Next.js Chatbot. All rights reserved.</p>
                </div>

                <div className="flex space-x-4">
                <a href="/privacy" className="hover:text-white transition">Privacy</a>
                <a href="/terms" className="hover:text-white transition">Terms</a>
                <Link href="/pages/contact" className="over:text-white transition">Contact</Link>
                </div>
            </div>
        </footer>

    )
}