export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-white py-6">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-gray-500 md:px-8">
        <p>
          &copy; {new Date().getFullYear()} Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
