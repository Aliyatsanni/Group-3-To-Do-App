'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LoginHeader from '../../components/LoginHeader';
import Footer from '../../components/Footer';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      setIsLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long!');
      setIsLoading(false);
      return;
    }

    // Simulate account creation - in production, connect to your API
    setTimeout(() => {
      console.log('Account created:', formData);
      setShowSuccessPopup(true);
      setIsLoading(false);

      // Redirect to login after showing success message
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <LoginHeader />
      <main className="flex flex-1 items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Create Account
            </h2>
            <p className="text-gray-500">
              Sign up to get started with your task manager
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 px-4 py-3 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>

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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 px-4 py-3 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]"
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  placeholder="Create a password (min. 6 characters)"
                  className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 px-4 py-3 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-gray-300 bg-white text-gray-900 px-4 py-3 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-[#4F46E5] px-4 py-3 font-medium text-white transition hover:bg-[#4338ca] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-[#4F46E5] transition hover:text-[#4338ca]"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed bottom-4 right-4 z-50 rounded-xl bg-green-600 px-6 py-4 text-white shadow-lg animate-bounce">
          <p className="font-medium">Account successfully created!</p>
        </div>
      )}
    </div>
  );
}
