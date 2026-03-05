import type { User } from "../../../types/user";
import { Text } from "../../atoms/Text/Text";
import { UserCard } from "../UserCard/UserCard";
import styles from "./UserGrid.module.css";

type UserGridProps = {
  users: User[];
  selectedUserId?: number | null;
  onSelect: (user: User) => void;
};

export function UserGrid({ users, selectedUserId, onSelect }: UserGridProps) {
  if (!users.length) {
    return <Text variant="muted">No users match your search.</Text>;
  }

  return (
    <div className={styles.grid} role="list" aria-label="User cards">
      {users.map((u) => (
        <div key={u.id} role="listitem">
          <UserCard user={u} onSelect={onSelect} isSelected={u.id === selectedUserId} />
        </div>
      ))}
    </div>
  );
}
