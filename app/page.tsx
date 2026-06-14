'use client';
import { useState } from 'react';
import PageLayout from '../components/PageLayout';

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete Dashboard UI',
      description: 'Build the dashboard page for the To-Do app.',
      dueDate: 'June 20',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Do the house chores',
      description: 'Clean the house and do the laundry.',
      dueDate: 'June 22',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Listen to podcast',
      description: 'Listen to a new podcast episode.',
      dueDate: 'June 25',
      status: 'Completed',
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const totalTasks = tasks.length;

  const activeTasks = tasks.filter((task) => task.status === 'Active').length;

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed'
  ).length;
  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-gray-500">Total Tasks</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-600">
              {totalTasks}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-gray-500">Active</p>
            <h2 className="mt-2 text-2xl font-bold text-[#4F46E5]">
              {activeTasks}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm text-gray-500">Completed</p>
            <h2 className="mt-2 text-2xl font-bold text-green-600">
              {completedTasks}
            </h2>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            className="w-full rounded-xl border bg-white p-3 outline-none text-purple-600"
          />
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex gap-3">
          <button className="rounded-xl bg-[#4F46E5] px-4 py-2 text-white">
            All
          </button>

          <button className="rounded-xl bg-white px-4 py-2 text-gray-600">
            Active
          </button>

          <button className="rounded-xl bg-white px-4 py-2 text-gray-600">
            Completed
          </button>
        </div>

        {/* Task Card */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="mb-2 text-lg font-semibold text-gray-900">
                    {task.title}
                  </h2>

                  <p className="mb-3 text-gray-600">{task.description}</p>

                  <span className="text-sm text-gray-500">
                    Due: {task.dueDate}
                  </span>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-sm ${
                    task.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-[#4F46E5] px-3 py-2 text-sm text-white">
                  Complete
                </button>

                <button className="rounded-lg border px-3 py-2 text-sm text-gray-700">
                  Edit
                </button>

                <button className="rounded-lg border border-red-200 px-3 py-2 text-sm text-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
