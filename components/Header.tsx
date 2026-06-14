export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
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
          <div className="h-10 w-10 rounded-full bg-[#4F46E5]"></div>
        </div>
      </div>
    </header>
  );
}
