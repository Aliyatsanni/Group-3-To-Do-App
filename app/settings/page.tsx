'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  const [theme, setTheme] = useState('light');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-950 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Manage your app preferences
        </p>

        {/* Appearance Section */}
        <div className="bg-white dark:bg-gray-900 rounded-[12px] p-6 shadow-sm border border-gray-200 dark:border-gray-800 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Appearance
          </h2>
          <div className="space-y-3">
            <button
              onClick={() => setTheme('light')}
              className={`w-full p-4 rounded-[12px] border-2 text-left ${
                theme === 'light'
                  ? 'border-[#4F46E5] bg-[#4F46E5]/5'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <span className="font-medium text-gray-900 dark:text-white">
                Light Mode
              </span>
              <p className="text-sm text-gray-500 mt-1">
                Bright and clean interface
              </p>
            </button>

            <button
              onClick={() => setTheme('dark')}
              className={`w-full p-4 rounded-[12px] border-2 text-left ${
                theme === 'dark'
                  ? 'border-[#4F46E5] bg-[#4F46E5]/5'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <span className="font-medium text-gray-900 dark:text-white">
                Dark Mode
              </span>
              <p className="text-sm text-gray-500 mt-1">Easy on the eyes</p>
            </button>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white dark:bg-gray-900 rounded-[12px] p-6 shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Preferences
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            More options coming soon...
          </p>
        </div>

        {/* Logout Section */}
        <div className="bg-white dark:bg-gray-900 rounded-[12px] p-6 shadow-sm border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Account
          </h2>
          <button
            onClick={handleLogout}
            className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
