import styles from "./SortSelect.module.css";
import type { SortKey } from "../../../hooks/useUsers";

type SortSelectProps = {
  value: SortKey;
  onChange: (value: SortKey) => void;
};

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="sort">
        Sort
      </label>

      <select
        id="sort"
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
      >
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
        <option value="company-asc">Company (A → Z)</option>
        <option value="company-desc">Company (Z → A)</option>
      </select>
    </div>
  );
}
