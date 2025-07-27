import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-900 text-white shadow-sm">
            <div className="max-w mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <h1 className="text-xl font-semibold tracking-tight">nextjs chatbot</h1>
                
                <nav className="hidden md:flex space-x-6">
                <a href="/" className="hover:text-indigo-400 transition">Home</a>
                <Link href="/pages/about" className="hover:text-indigo-400 transition">About</Link>
                <a href="/admin" className="hover:text-indigo-400 transition">Admin</a>
                </nav>

                <div className="md:hidden">
                {/* You can drop in a mobile nav toggle here */}
                <button className="text-indigo-400 hover:text-white">☰</button>
                </div>
            </div>
        </header>
    )
}