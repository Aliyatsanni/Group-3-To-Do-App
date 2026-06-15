'use client';
import PageLayout from '../../components/PageLayout';
import useTaskStore from '../../store/taskStore';

export default function Completed() {
  const tasks = useTaskStore((state) => state.tasks);

  const completedTasks = tasks.filter((task) => task.status === 'Completed');

  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
          Completed Tasks
        </h1>

        {completedTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-12 shadow-sm">
            <div className="mb-4 text-6xl" role="img" aria-label="celebration">
              🎉
            </div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              No completed tasks yet
            </h2>
            <p className="text-center text-gray-500">
              Complete some tasks and they'll appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {completedTasks.map((task) => (
              <article
                key={task.id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                      {task.title}
                    </h2>
                    <p className="mb-3 text-gray-600">{task.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>Due: {task.dueDate}</span>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}
