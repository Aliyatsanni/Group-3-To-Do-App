'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);

  // Colors that change based on Dark/Light mode
  const bgMain = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
  const bgCard = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
  const textMain = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSub = isDarkMode ? 'text-gray-400' : 'text-gray-500';

  const ToggleSwitch = ({ enabled, onChange }: { enabled: boolean; onChange: () => void }) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
        enabled ? 'bg-[#4F46E5]' : 'bg-gray-300'
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
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${bgMain}`}>
      
      {/* --- HEADER (Matches your app design, Settings button removed) --- */}
      <header className={`p-4 shadow-sm border-b ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div>
            <h1 className={`text-xl font-bold ${textMain}`}>Task Manager</h1>
            <p className={`text-xs ${textSub}`}>Organize and track your daily tasks</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Settings button is intentionally removed here */}
            <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center text-xs font-bold">
              TM
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}      <main className="flex-grow p-4 sm:p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          
          <div className="mb-6">
            <h2 className={`text-2xl font-bold ${textMain}`}>Settings</h2>
            <p className={`${textSub} text-sm`}>Manage your app preferences</p>
          </div>

          {/* Appearance Section */}
          <div className={`rounded-xl p-6 shadow-sm border ${bgCard}`}>
            <h3 className={`text-lg font-semibold mb-4 ${textMain}`}>Appearance</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className={`font-medium ${textMain}`}>Dark Mode</p>
                <p className={`text-sm ${textSub}`}>Switch between light and dark themes</p>
              </div>
              <ToggleSwitch enabled={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
            </div>
          </div>

          {/* Preferences Section */}
          <div className={`rounded-xl p-6 shadow-sm border ${bgCard}`}>
            <h3 className={`text-lg font-semibold mb-4 ${textMain}`}>Preferences</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className={`font-medium ${textMain}`}>Push Notifications</p>
                  <p className={`text-sm ${textSub}`}>Receive daily task reminders</p>
                </div>
                <ToggleSwitch enabled={notifications} onChange={() => setNotifications(!notifications)} />
              </div>

              <div className={`flex items-center justify-between border-t pt-6 ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                <div>
                  <p className={`font-medium ${textMain}`}>Sound Effects</p>
                  <p className={`text-sm ${textSub}`}>Play sounds on task completion</p>
                </div>
                <ToggleSwitch enabled={soundEffects} onChange={() => setSoundEffects(!soundEffects)} />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className={`rounded-xl p-6 shadow-sm border ${bgCard}`}>
            <h3 className={`text-lg font-semibold mb-4 ${textMain}`}>About</h3>
            <div className={`space-y-2 text-sm ${textSub}`}>
              <div className="flex justify-between">
                <span>Version</span>
                <span className="font-mono">1.0.0</span>              </div>
              <div className="flex justify-between">
                <span>Built with</span>
                <span className="text-[#4F46E5]">Next.js & Tailwind</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* --- FOOTER (Matches your app design) --- */}
      <footer className={`p-4 border-t ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs font-bold">
            N
          </div>
          <p className={`text-xs ${textSub} text-center flex-grow`}>
            © 2026 Task Manager. All rights reserved.
          </p>
          {/* Empty div to balance the flex layout so text stays centered */}
          <div className="w-8"></div>
        </div>
      </footer>

    </div>
  );
            }
