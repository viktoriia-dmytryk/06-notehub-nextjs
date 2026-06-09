import css from './SearchBox.module.css';

interface SearchBoxProps {
  query: string;
  onSearch: (value: string) => void;
}

function SearchBox({ query, onSearch }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      defaultValue={query}
      onChange={e => onSearch(e.target.value)}
    />
  );
}

export default SearchBox;
