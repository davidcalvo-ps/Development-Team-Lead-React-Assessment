import { useEffect, useRef } from "react";
import type { User } from "../../../types/user";
import { Button } from "../../atoms/Button/Button";
import { Text } from "../../atoms/Text/Text";
import styles from "./UserDetailsSidebar.module.css";

type Props = {
  user: User | null;
  onClose: () => void;
};

export function UserDetailsSidebar({ user, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!user) return;

    // Focus the close button when sidebar opens (keyboard-friendly).
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [user, onClose]);

  if (!user) return null;

  const address = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

  return (
    <aside
      className={styles.sidebar}
      aria-label="User details"
      role="complementary"
    >
      <div className={styles.header}>
        <Text as="h2" variant="subtitle">
          Details
        </Text>

        <Button ref={closeBtnRef} variant="ghost" onClick={onClose} aria-label="Close details">
          Close
        </Button>
      </div>

      <div className={styles.section}>
        <Text as="h3" variant="subtitle">Name</Text>
        <Text>{user.name}</Text>
      </div>

      <div className={styles.section}>
        <Text as="h3" variant="subtitle">Email</Text>
        <Text>{user.email}</Text>
      </div>

      <div className={styles.section}>
        <Text as="h3" variant="subtitle">Company</Text>
        <Text>{user.company.name}</Text>
        <Text variant="muted">{user.company.catchPhrase}</Text>
      </div>

      <div className={styles.section}>
        <Text as="h3" variant="subtitle">Address</Text>
        <Text>{address}</Text>
      </div>

      <div className={styles.section}>
        <Text as="h3" variant="subtitle">Contact</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>Website: {user.website}</Text>
      </div>
    </aside>
  );
}
