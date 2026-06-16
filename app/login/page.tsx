'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login - in production, connect to your API
    setTimeout(() => {
      console.log({ email, password });
      // Store login state (in production, use proper auth)
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to dashboard
      router.push('/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <LoginHeader />
      <main className="flex flex-1 items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="text-gray-500">Sign in to access your task manager</p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm">
            <div className="mb-6 rounded-lg bg-purple-50 p-4 text-center">
              <p className="text-sm text-purple-700">
                <span className="font-semibold">Demo Mode:</span> Use any email
                and password to login
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#4F46E5] px-4 py-3 font-medium text-white transition hover:bg-[#4338ca] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>

              <p className="text-center text-sm text-gray-500">
                Don&apos;t have an account?{' '}
                <Link
                  href="/register"
                  className="font-medium text-[#4F46E5] transition hover:text-[#4338ca]"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
