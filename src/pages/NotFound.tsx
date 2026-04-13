// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page not found</p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-white text-black font-semibold hover:bg-emerald-50 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
