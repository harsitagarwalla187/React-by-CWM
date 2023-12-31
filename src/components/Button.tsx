import styles from "./Button/Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

const Button = ({ color = "secondary", children, onClick }: Props) => {
  return (
    <button
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
