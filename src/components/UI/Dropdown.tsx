import { useState } from "react";
import styles from "./Dropdown.module.css";

export interface DropdownProps {
  title: string;
  bodyText: string;
}

export default function Dropdown({ title, bodyText }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdownContainer}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.dropdownHeader}
      >
        <h4>{title}</h4>
        <span className={styles.icon}>{isOpen ? "✖" : "▼"}</span>
      </button>

      {isOpen && <p className={styles.dropdownBody}>{bodyText}</p>}
    </div>
  );
}
