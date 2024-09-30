import Filter from "./Filter";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex w-full flex-col p-2">
      <SearchBar />
      <Filter />
    </header>
  );
}
