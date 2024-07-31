export default function App() {
  return (
    <div className="pt-8 w-full h-dvh bg-slate-900">
      <div className="pt-8 mx-auto h-screen max-w-lg text-gray-100">
        <ul>
          <li className="py-0.5">
            <span className="flex items-center gap-1">
              <FolderIcon />
              Home
            </span>
            <ul className="ml-6">
              {/* Add subfolder here */}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

function FolderIcon({ isOpen = false }: { isOpen?: boolean }) {
  return <span>{isOpen ? '📂' : '📁'}</span>
}

