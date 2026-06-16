'use client';
import { useState } from 'react';
import PageLayout from '../../components/PageLayout';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
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
    {
      id: 4,
      title: 'Review project documentation',
      description: 'Read through the project docs and update missing sections.',
      dueDate: 'June 18',
      status: 'Active',
    },
    {
      id: 5,
      title: 'Morning workout',
      description: 'Complete 30-minute exercise routine.',
      dueDate: 'June 16',
      status: 'Active',
    },
    {
      id: 6,
      title: 'Grocery shopping',
      description: 'Buy weekly groceries and household essentials.',
      dueDate: 'June 17',
      status: 'Active',
    },
    {
      id: 7,
      title: 'Reply to important emails',
      description: 'Respond to pending client and team emails.',
      dueDate: 'June 19',
      status: 'Active',
    },
    {
      id: 8,
      title: 'Read for 30 minutes',
      description:
        'Read a book or educational material for personal development.',
      dueDate: 'June 21',
      status: 'Active',
    },
  ]);
  const [editingTask, setEditingTask] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
  });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const totalTasks = tasks.length;

  const activeTasks = tasks.filter((task) => task.status === 'Active').length;

  const completedTasks = tasks.filter(
    (task) => task.status === 'Completed'
  ).length;

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (task: Task) => {
    setEditingTask(task.id);
    setEditFormData({
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
    });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask ? { ...task, ...editFormData } : task
      )
    );
    setShowEditModal(false);
    setEditingTask(null);
    setSuccessMessage('Task updated successfully!');
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000);
  };

  const handleDeleteClick = (taskId: number) => {
    setTaskToDelete(taskId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (taskToDelete) {
      setTasks(tasks.filter((task) => task.id !== taskToDelete));
      setShowDeleteModal(false);
      setTaskToDelete(null);
      setSuccessMessage('Task has been deleted!');
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 3000);
    }
  };

  const handleComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: 'Completed' } : task
      )
    );
    setSuccessMessage('Task completed! Great job!');
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 3000);
  };

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
            <h2 className="mt-2 text-2xl font-bold text-[#4F46E5]">
              {completedTasks}
            </h2>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border bg-white p-3 outline-none text-purple-600 focus:ring-2 focus:ring-purple-500"
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
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
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
                        ? 'bg-purple-100 text-purple-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {task.status}
                  </span>
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => handleComplete(task.id)}
                    disabled={task.status === 'Completed'}
                    className={`rounded-lg px-3 py-2 text-sm ${
                      task.status === 'Completed'
                        ? 'bg-purple-100 text-purple-700 cursor-not-allowed'
                        : 'bg-[#4F46E5] text-white hover:bg-[#4338ca] transition-all duration-200 shadow-md hover:shadow-lg'
                    }`}
                  >
                    {task.status === 'Completed' ? '✓ Completed' : '✓ Complete'}
                  </button>

                  <button
                    onClick={() => handleEdit(task)}
                    className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    ✏️ Edit
                  </button>

                  <button
                    onClick={() => handleDeleteClick(task.id)}
                    className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600 hover:bg-red-100 transition-colors"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-xl bg-white p-8 text-center shadow-sm">
              <p className="text-gray-500">
                No tasks found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Edit Modal */}
        {showEditModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                Edit Task
              </h2>
              <input
                type="text"
                placeholder="Task Title"
                value={editFormData.title}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, title: e.target.value })
                }
                className="mb-3 w-full rounded-lg border p-3 text-gray-900 placeholder:text-gray-400"
              />
              <textarea
                placeholder="Task Description"
                value={editFormData.description}
                onChange={(e) =>
                  setEditFormData({
                    ...editFormData,
                    description: e.target.value,
                  })
                }
                className="mb-3 w-full rounded-lg border p-3 text-gray-900 placeholder:text-gray-400"
                rows={3}
              />
              <input
                type="text"
                placeholder="Due Date"
                value={editFormData.dueDate}
                onChange={(e) =>
                  setEditFormData({ ...editFormData, dueDate: e.target.value })
                }
                className="mb-4 w-full rounded-lg border p-3 text-gray-900 placeholder:text-gray-400"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 rounded-lg bg-[#4F46E5] px-4 py-2 text-white hover:bg-[#4338ca] transition-colors"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                Delete Task
              </h2>
              <p className="mb-6 text-gray-600">
                Are you sure you want to delete this task? This action cannot be
                undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handleConfirmDelete}
                  className="flex-1 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition-colors"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setTaskToDelete(null);
                  }}
                  className="flex-1 rounded-lg border px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="fixed bottom-4 right-4 z-50 rounded-xl bg-[#4F46E5] px-6 py-4 text-white shadow-lg animate-bounce">
            <p className="font-medium">{successMessage}</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
