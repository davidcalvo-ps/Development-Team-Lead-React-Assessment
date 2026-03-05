import { useMemo, useState } from "react";
import { UsersTemplate } from "./components/templates/UsersTemplate";
import { useUsers } from "./hooks/useUsers";
import type { User } from "./types/user";

export default function App() {
  const { users, rawUsersCount, isLoading, error, query, setQuery, sortKey, setSortKey } = useUsers();

  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const selectedUser: User | null = useMemo(() => {
    if (!selectedUserId) return null;
    return users.find((u) => u.id === selectedUserId) ?? null;
  }, [selectedUserId, users]);

  return (
    <UsersTemplate
      users={users}
      totalCount={rawUsersCount}
      isLoading={isLoading}
      error={error}
      query={query}
      onQueryChange={(v) => {
        setQuery(v);
        setSelectedUserId(null); // optional: reset sidebar when search changes
      }}
      sortKey={sortKey}
      onSortChange={(v) => {
        setSortKey(v);
        setSelectedUserId(null); // optional: reset sidebar when sort changes
      }}
      selectedUser={selectedUser}
      onSelectUser={(u) => setSelectedUserId(u.id)}
      onCloseSidebar={() => setSelectedUserId(null)}
    />
  );
}
