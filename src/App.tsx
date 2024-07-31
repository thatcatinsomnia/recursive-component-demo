import { useState } from 'react';

type Folder = {
  name: string;
  folders?: Folder[];
};

export default function App() {
  const folders: Folder[] = [
    {
      name: 'Home',
      folders: [
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
      ]
    }
  ];

  return (
    <div className="pt-8 w-full h-dvh bg-slate-900">
      <div className="pt-8 mx-auto h-screen max-w-lg text-gray-100">
        <ul>
          {folders.map(folder => <Folder folder={folder} />)}
        </ul>
      </div>
    </div>
  )
}

function FolderIcon({ isOpen = false }: { isOpen?: boolean }) {
  return <span>{isOpen ? '📂' : '📁'}</span>
}

function Folder({ folder }: { folder: Folder }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(opened => !opened);
  };

  return (
    <li className="py-0.5" key={folder.name}>
      <button className="flex items-center gap-1" onClick={handleClick}>
        <FolderIcon isOpen={isOpen} />
        <span className={isOpen ? 'text-pink-500' : ''}>{folder.name}</span>
      </button >

      <ul className="ml-6">
        {isOpen && folder.folders?.map(folder => <Folder folder={folder} />)}
      </ul>
    </li>
  );
}

