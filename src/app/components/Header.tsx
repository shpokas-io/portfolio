interface HeaderProps {
  onMenuClick?: () => void;
  onVersionClick?: () => void;
  onContactClick?: () => void;
}

export default function Header({ onMenuClick, onVersionClick, onContactClick }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 h-20 flex items-center">
      <div className="w-full px-8">
        <nav className="flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="text-sm font-medium text-gray-900 cursor-pointer hover:opacity-60 transition-opacity"
          >
            Menu
          </button>
          <button
            onClick={onVersionClick}
            className="text-sm font-medium text-gray-900 cursor-pointer hover:opacity-60 transition-opacity"
          >
            White Version
          </button>
          <button
            onClick={onContactClick}
            className="text-sm font-medium text-gray-900 cursor-pointer hover:opacity-60 transition-opacity"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}