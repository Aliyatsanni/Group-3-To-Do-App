'use client';

import React, { useState } from 'react';

// 1. Define a strict TypeScript interface for your tasks
interface Task {
  id: number;
  name: string;
  status: 'completed' | 'pending';
  date: string;
}

// 2. Type the initial array explicitly
const initialTasks: Task[] = [
  { id: 1, name: 'Design dashboard UI', status: 'pending', date: '2026-06-15' },
  { id: 2, name: 'Fix navbar bug', status: 'completed', date: '2026-06-14' },
  {
    id: 3,
    name: 'Write API documentation',
    status: 'pending',
    date: '2026-06-12',
  },
];

export default function TaskManager() {
  // 3. Removed unused 'setTasks' variable to clear the eslint warning
  const [tasks] = useState<Task[]>(initialTasks);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('az');

  // Filter and Sort Logic with strict typing replacing "any"
  const filteredAndSortedTasks = tasks
    .filter((task: Task) => {
      const matchesSearch = task.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesFilter = filter === 'all' || task.status === filter;
      return matchesSearch && matchesFilter;
    })
    .sort((a: Task, b: Task) => {
      if (sortBy === 'az') return a.name.localeCompare(b.name);
      if (sortBy === 'za') return b.name.localeCompare(a.name);
      if (sortBy === 'completed') {
        return (
          (a.status === 'completed' ? -1 : 1) -
          (b.status === 'completed' ? -1 : 1)
        );
      }
      if (sortBy === 'pending') {
        return (
          (a.status === 'pending' ? -1 : 1) - (b.status === 'pending' ? -1 : 1)
        );
      }
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827] font-sans px-5 py-10">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">Search Bar</h1>

        {/* CONTROLS CARD */}
        <div className="bg-white rounded-xl p-6 shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col gap-5">
          {/* SEARCH */}
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-[#6B7280]">
              🔍
            </span>
            <input
              type="text"
              id="searchInput"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3.5 pl-12 pr-4 border border-[#E5E7EB] rounded-xl outline-none text-[15px] transition-all duration-300 ease-in-out bg-white focus:border-[#4F46E5] focus:shadow-[0_0_0_4px_rgba(79,70,229,0.12)]"
            />
          </div>

          {/* FILTER + SORT ROW */}
          <div className="flex justify-between gap-5 flex-wrap md:flex-nowrap md:flex-row flex-col">
            {/* FILTERS */}
            <div className="flex gap-3 flex-wrap w-full md:w-auto">
              {['all', 'completed', 'pending'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`flex-1 md:flex-none text-center border-none px-[18px] py-3 rounded-lg cursor-pointer font-semibold text-sm transition-all duration-300 ease-in-out ${
                    filter === type
                      ? 'bg-[#4F46E5] text-white'
                      : 'bg-[#EEF2FF] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            {/* SORT */}
            <div className="min-w-[220px] w-full md:w-auto">
              <select
                className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] outline-none text-sm bg-white cursor-pointer transition-all duration-300 ease-in-out focus:border-[#4F46E5] focus:shadow-[0_0_0_4px_rgba(79,70,229,0.12)]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="az">Sort: A - Z</option>
                <option value="za">Sort: Z - A</option>
                <option value="completed">Completed First</option>
                <option value="pending">Pending First</option>
              </select>
            </div>
          </div>
        </div>

        {/* TASK LIST */}
        <div className="mt-7 flex flex-col gap-3.5">
          {filteredAndSortedTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-xl p-[18px] flex flex-col md:flex-row md:items-center justify-between shadow-[0_4px_10px_rgba(0,0,0,0.04)] border border-[#F1F5F9] transition-all duration-300 ease-in-out hover:-translate-y-0.5 gap-3 md:gap-0"
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`w-3 h-3 rounded-full ${
                    task.status === 'completed'
                      ? 'bg-[#10B981]'
                      : 'bg-[#F59E0B]'
                  }`}
                />
                <span className="font-medium text-[15px]">{task.name}</span>
              </div>
              <span className="text-xs text-[#6B7280]">{task.date}</span>
            </div>
          ))}
          {filteredAndSortedTasks.length === 0 && (
            <p className="text-center text-[#6B7280] mt-5">No tasks found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
