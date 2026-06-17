'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type ToggleSwitchProps = {
  enabled: boolean;
  onChange: () => void;
};

function ToggleSwitch({ enabled, onChange }: ToggleSwitchProps) {
  return (
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
}

export default function SettingsPage() {
  const router = useRouter();
  const [showCompletedTasks, setShowCompletedTasks] = useState(true);
  const [sortTasks, setSortTasks] = useState('date');
  const [enableReminders, setEnableReminders] = useState(true);
  const [reminderTime, setReminderTime] = useState('09:00');
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  const handleClearCompletedTasks = () => {
    if (confirm('Are you sure you want to clear all completed tasks?')) {
      // In production, this would call an API to clear completed tasks
      alert('Completed tasks cleared!');
    }
  };

  const handleDeleteAllTasks = () => {
    if (
      confirm(
        'Are you sure you want to delete ALL tasks? This action cannot be undone.'
      )
    ) {
      // In production, this would call an API to delete all tasks
      alert('All tasks deleted!');
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      alert('Password must be at least 6 characters!');
      return;
    }
    // In production, this would call an API to change password
    alert('Password changed successfully!');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setShowChangePassword(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 sm:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => router.push('/dashboard')}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </button>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-500 mb-8">Manage your app preferences</p>

        {/* User Profile Section */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-200 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            User Profile
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white text-xl font-bold">
              SM
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Sanni Semilore</h3>
              <p className="text-sm text-gray-500">liyabaealiyat@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Task Preferences Section */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-200 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Task Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">
                  Show Completed Tasks
                </p>
                <p className="text-sm text-gray-500">
                  Display completed tasks in the list
                </p>
              </div>
              <ToggleSwitch
                enabled={showCompletedTasks}
                onChange={() => setShowCompletedTasks(!showCompletedTasks)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Sort Tasks</p>
                <p className="text-sm text-gray-500">
                  Choose how to sort your tasks
                </p>
              </div>
              <select
                value={sortTasks}
                onChange={(e) => setSortTasks(e.target.value)}
                className="rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              >
                <option value="date">By Date</option>
                <option value="name">By Name</option>
                <option value="status">By Status</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Task Filters</p>
                <p className="text-sm text-gray-500">Default filter view</p>
              </div>
              <select
                defaultValue="all"
                className="rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
              >
                <option value="all">All Tasks</option>
                <option value="active">Active Only</option>
                <option value="completed">Completed Only</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-200 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Notifications
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Reminder Settings</p>
                <p className="text-sm text-gray-500">Enable task reminders</p>
              </div>
              <ToggleSwitch
                enabled={enableReminders}
                onChange={() => setEnableReminders(!enableReminders)}
              />
            </div>

            {enableReminders && (
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <p className="font-medium text-gray-900">Reminder Time</p>
                  <p className="text-sm text-gray-500">
                    When to send daily reminders
                  </p>
                </div>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white text-gray-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>
            )}
          </div>
        </div>

        {/* Data Management Section */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-200 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Data Management
          </h2>
          <div className="space-y-3">
            <button
              onClick={handleClearCompletedTasks}
              className="w-full rounded-lg border border-orange-200 bg-orange-50 px-4 py-3 text-sm font-semibold text-orange-600 transition hover:bg-orange-100 text-left"
            >
              Clear Completed Tasks
            </button>
            <button
              onClick={handleDeleteAllTasks}
              className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 text-left"
            >
              Delete All Tasks
            </button>
          </div>
        </div>

        {/* Account Section */}
        <div className="bg-white rounded-[12px] p-6 shadow-sm border border-gray-200 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Account</h2>
          <div className="space-y-3">
            <button
              onClick={() => setShowChangePassword(true)}
              className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 text-left"
            >
              Change Password
            </button>
            <button
              onClick={handleLogout}
              className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      {showChangePassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl border border-gray-200">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              Change Password
            </h2>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Current Password
                </label>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      currentPassword: e.target.value,
                    })
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      newPassword: e.target.value,
                    })
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) =>
                    setPasswordForm({
                      ...passwordForm,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white text-gray-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-[#4F46E5] px-4 py-2 text-white hover:bg-[#4338ca] transition-colors"
                >
                  Change Password
                </button>
                <button
                  type="button"
                  onClick={() => setShowChangePassword(false)}
                  className="flex-1 rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
