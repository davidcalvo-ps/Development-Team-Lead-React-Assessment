import { useEffect, useMemo, useState } from "react";
import type { User } from "../types/user";
import { fetchUsers } from "../services/usersApi";

export type SortKey = "name-asc" | "name-desc" | "company-asc" | "company-desc";

function sortUsers(users: User[], sortKey: SortKey): User[] {
  const copy = [...users];

  const byText = (a: string, b: string) => a.localeCompare(b, undefined, { sensitivity: "base" });

  switch (sortKey) {
    case "name-asc":
      return copy.sort((a, b) => byText(a.name, b.name));
    case "name-desc":
      return copy.sort((a, b) => byText(b.name, a.name));
    case "company-asc":
      return copy.sort((a, b) => byText(a.company.name, b.company.name));
    case "company-desc":
      return copy.sort((a, b) => byText(b.company.name, a.company.name));
    default:
      return copy;
  }
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState<string>("");
  const [sortKey, setSortKey] = useState<SortKey>("name-asc");

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchUsers(controller.signal);
        setUsers(data);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  const filteredAndSorted = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = q.length
      ? users.filter((u) => u.name.toLowerCase().includes(q))
      : users;

    return sortUsers(filtered, sortKey);
  }, [users, query, sortKey]);

  return {
    users: filteredAndSorted,
    rawUsersCount: users.length,
    isLoading,
    error,
    query,
    setQuery,
    sortKey,
    setSortKey,
  };
}
