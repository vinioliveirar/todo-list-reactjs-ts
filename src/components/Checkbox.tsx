import { Check, CheckCircle, Circle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import styles from "./Checkbox.module.css";
interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
}
export function Checkbox({ checked, ...props }: CheckboxProps) {
  return (
    <>
      {checked ? (
        <button className={styles.checkbox} {...props}>
          <Circle size={24} />
        </button>
      ) : (
        <button className={styles.checkboxChecked} {...props}>
          <Check size={24} />
        </button>
      )}
    </>
  );
}
