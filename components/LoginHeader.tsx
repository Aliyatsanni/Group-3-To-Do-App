export default function LoginHeader() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-5xl px-4 py-4 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Task Manager
            </h1>
            <p className="mt-1 text-sm text-gray-500 md:text-base">
              Organize and track your daily tasks
            </p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-lg font-bold text-white shadow-md">
            TM
          </div>
        </div>
      </div>
    </header>
  );
}
