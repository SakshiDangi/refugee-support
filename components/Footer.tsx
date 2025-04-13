import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              We build intelligent web applications using the latest AI technologies 
              to make your digital experience smarter and more efficient.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chatbot" className="text-gray-300 hover:text-white">
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link href="/translator" className="text-gray-300 hover:text-white">
                  Translation Tool
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white">
                  Job Listings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@aiwebsite.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} AI Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
