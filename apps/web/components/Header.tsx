import Filter from "./Filter";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex h-14 w-full flex-col">
      <SearchBar />
      <Filter />
    </header>
  );
}
