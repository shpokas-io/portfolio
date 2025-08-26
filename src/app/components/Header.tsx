interface HeaderProps {
  onMenuClick?: () => void;
  onContactClick?: () => void;
}

export default function Header({ onMenuClick, onContactClick }: HeaderProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 h-20 sm:h-24 md:h-28 flex items-center">
      <div className="w-full px-4 sm:px-8 md:px-12">
        <nav className="flex items-center justify-between">
          <button
            onClick={onMenuClick}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 cursor-pointer hover:opacity-60 transition-opacity tracking-wider"
          >
            Menu
          </button>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-wider">
            Welcome
          </span>
          <button
            onClick={onContactClick}
            className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900 cursor-pointer hover:opacity-60 transition-opacity tracking-wider"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
