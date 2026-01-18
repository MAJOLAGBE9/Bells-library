// app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      router.push("/my-library");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE: Gold Section */}
      {/* Changed bg-blue-600 to bg-yellow-600 (Gold) */}
      <div className="hidden md:flex md:w-1/2 bg-yellow-600 flex-col justify-center items-center text-white p-12 relative overflow-hidden">
        
        {/* Decorative Blobs - Changed to lighter/darker golds */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 text-center">
          <svg className="w-20 h-20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.56-3.24 8.84-8 9.86-4.76-1.02-8-5.3-8-9.86V7.78l8-3.6z"/>
          </svg>
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-yellow-100 text-lg max-w-md mx-auto">
            Access the Bells University E-Library portal to manage your loans, renewals, and research history.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE: White Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900">Student Login</h2>
            <p className="mt-2 text-gray-600">Please enter your credentials.</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4">
              {/* Student ID */}
              <div>
                <label htmlFor="student-id" className="block text-sm font-medium text-gray-700">
                  Student ID
                </label>
                <input
                  id="student-id"
                  name="student-id"
                  type="text"
                  required
                  // Changed focus rings to Gold (yellow-500)
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="e.g. 2023/1234"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  // Checkbox color
                  className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                {/* Link color */}
                <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button - Gold Background */}
            <button
              type="submit"
              disabled={loading}
              className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${
                loading ? "bg-yellow-400 cursor-wait" : "bg-yellow-600 hover:bg-yellow-700"
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="text-center mt-4">
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
              ← Back to Homepage
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}