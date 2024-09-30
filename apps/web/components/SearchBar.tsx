import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div className="flex h-8 w-full flex-row items-center justify-center overflow-hidden rounded-full border px-2.5">
      <input className="h-full w-full outline-none" />
      <IoSearch className="text-gray-500" size={20} />
    </div>
  );
}
