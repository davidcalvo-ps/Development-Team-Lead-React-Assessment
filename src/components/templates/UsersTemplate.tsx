import type { User } from "../../types/user";
import type { SortKey } from "../../hooks/useUsers";
import { Text } from "../atoms/Text/Text";
import { SearchBar } from "../molecules/SearchBar/SearchBar";
import { SortSelect } from "../molecules/SortSelect/SortSelect";
import { UserGrid } from "../organisms/UserGrid/UserGrid";
import { UserDetailsSidebar } from "../organisms/UserDetailsSidebar/UserDetailsSidebar";
import styles from "./UsersTemplate.module.css";

type Props = {
  users: User[];
  totalCount: number;
  isLoading: boolean;
  error: string | null;

  query: string;
  onQueryChange: (v: string) => void;

  sortKey: SortKey;
  onSortChange: (v: SortKey) => void;

  selectedUser: User | null;
  onSelectUser: (u: User) => void;
  onCloseSidebar: () => void;
};

export function UsersTemplate({
  users,
  totalCount,
  isLoading,
  error,
  query,
  onQueryChange,
  sortKey,
  onSortChange,
  selectedUser,
  onSelectUser,
  onCloseSidebar,
}: Props) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Text as="h1" variant="title">
          Users
        </Text>
        <Text variant="muted">
          Showing {users.length} of {totalCount}
        </Text>
      </header>

      <section className={styles.controls} aria-label="User controls">
        <SearchBar value={query} onChange={onQueryChange} />
        <SortSelect value={sortKey} onChange={onSortChange} />
      </section>

      {isLoading ? (
        <Text variant="muted">Loading users…</Text>
      ) : error ? (
        <div className={styles.error} role="alert">
          <Text as="h2" variant="subtitle">Something went wrong</Text>
          <Text variant="muted">{error}</Text>
        </div>
      ) : (
        <main className={styles.main}>
          <div className={styles.gridArea}>
            <UserGrid
              users={users}
              selectedUserId={selectedUser?.id ?? null}
              onSelect={onSelectUser}
            />
          </div>

          <div className={styles.sidebarArea}>
            <UserDetailsSidebar user={selectedUser} onClose={onCloseSidebar} />
          </div>
        </main>
      )}
    </div>
  );
}
