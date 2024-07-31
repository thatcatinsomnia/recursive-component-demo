export default function App() {
  const folders = [
    {
      name: 'Document',
      folders: [
        { name: 'Movies' },
        { name: 'Music' }
      ]
    },
    {
      name: 'Downloads'
    },
    {
      name: 'Photos'
    }
  ];

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
              {folders.map(folder => (
                <li className="py-0.5" key={folder.name}>
                  <span className="flex items-center gap-1">
                    <FolderIcon />
                    {folder.name} 
                  </span>
                  <ul className="ml-6">
                    {/* Add subfolder here */}
                    {folder.folders?.map(folder => (
                      <li className="py-0.5" key={folder.name}>
                        <span className="flex items-center gap-1">
                          <FolderIcon />
                          {folder.name} 
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
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

