import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {label}
    </button>
  );
}
