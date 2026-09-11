"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: SearchBarProps) => {
  return (
    <div
      className={`flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-input px-4 py-1 bg-card transition-shadow focus-within:ring-cerulean-400 focus-within:ring-2 ${className}`}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full p-2 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
      />
    </div>
  );
};

export default SearchBar;
