'use client';

import { useState, useEffect } from 'react';

export default function SettingsPage() {
  // State for toggles
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);

  // This effect actually applies the dark mode to the whole page
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Reusable Toggle Switch Component
  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        enabled ? 'bg-[#4F46E5]' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-gray-900 p-4 sm:p-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your app preferences</p>
        </div>

        {/* Appearance Section */}
        <div className="bg-white dark:bg-gray-800 rounded-[12px] p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <div>              <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Switch between light and dark themes</p>
            </div>
            <ToggleSwitch enabled={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-white dark:bg-gray-800 rounded-[12px] p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Preferences</h2>
          
          <div className="space-y-6">
            {/* Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive daily task reminders</p>
              </div>
              <ToggleSwitch enabled={notifications} onChange={() => setNotifications(!notifications)} />
            </div>

            {/* Sound Effects */}
            <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-700 pt-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Sound Effects</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Play sounds on task completion</p>
              </div>
              <ToggleSwitch enabled={soundEffects} onChange={() => setSoundEffects(!soundEffects)} />
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-800 rounded-[12px] p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">About</h2>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Version</span>
              <span className="font-mono">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>Built with</span>
              <span className="text-[#4F46E5]">Next.js & Tailwind</span>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white dark:bg-gray-800 rounded-[12px] p-6 shadow-sm border border-red-200 dark:border-red-900/30">
          <h2 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h2>          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Irreversible and destructive actions</p>
          <button className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors border border-red-200">
            Delete Account
          </button>
        </div>

      </div>
    </div>
  );
              }
