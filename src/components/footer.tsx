export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} arkhabw. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Built with Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
