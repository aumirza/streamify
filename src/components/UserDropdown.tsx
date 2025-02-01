import { UserIcon } from "lucide-react";

export function UserDropdown() {
  return (
    <div className="flex items-center justify-end w-10 overflow-hidden transition-all duration-300 ease-in-out rounded-full shadow bg-secondary group hover:w-48">
      <span className="px-2 mr-2 transition-all duration-300 ease-in-out opacity-0 whitespace-nowrap group-hover:opacity-100">
        Some User
      </span>
      <div className="flex items-center justify-center flex-shrink-0 rounded-full bg-card size-10">
        <UserIcon className="w-5 h-5" />
      </div>
    </div>
  );
}
