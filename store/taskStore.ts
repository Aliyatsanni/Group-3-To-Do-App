import { create } from 'zustand';

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: 'Active' | 'Completed';
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTaskStatus: (id: number, status: 'Active' | 'Completed') => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, updates: Partial<Omit<Task, 'id'>>) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
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
  ],
  addTask: (task) =>
    set((state) => ({
      tasks: [...state.tasks, { ...task, id: Date.now() }],
    })),
  updateTaskStatus: (id, status) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      ),
    })),
  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  editTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updates } : task
      ),
    })),
}));

export default useTaskStore;
