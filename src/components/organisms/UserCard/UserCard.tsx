import type { User } from "../../../types/user";
import { Text } from "../../atoms/Text/Text";
import styles from "./UserCard.module.css";

type UserCardProps = {
  user: User;
  onSelect: (user: User) => void;
  isSelected?: boolean;
};

export function UserCard({ user, onSelect, isSelected }: UserCardProps) {
  return (
    <button
      type="button"
      className={[styles.card, isSelected ? styles.selected : ""].filter(Boolean).join(" ")}
      onClick={() => onSelect(user)}
      aria-label={`Open details for ${user.name}`}
    >
      <Text as="h3" variant="subtitle" className={styles.name}>
        {user.name}
      </Text>

      <Text variant="body" className={styles.email}>
        {user.email}
      </Text>

      <Text variant="muted">{user.company.name}</Text>
    </button>
  );
}
