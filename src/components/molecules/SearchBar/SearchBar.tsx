import { Input } from "../../atoms/Input/Input";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.wrapper} role="search" aria-label="Search users">
      <Input
        label="Search by name"
        placeholder="Type a name…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
