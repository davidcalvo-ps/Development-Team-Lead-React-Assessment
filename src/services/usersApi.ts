import type { User } from "../types/user";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(signal?: AbortSignal): Promise<User[]> {
  const res = await fetch(USERS_URL, { signal });

  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
  }

  const data = (await res.json()) as User[];
  return data;
}
