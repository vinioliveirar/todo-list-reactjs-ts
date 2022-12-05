import { Trash } from "phosphor-react";
import styles from "./ListTask.module.css";

interface TaskProps {
  content: string;
}
export function ListTaks({ content }: TaskProps) {
  return (
    <div>
      <section className={styles.contentTasks}>
        <div>
          <ul className={styles.listTaks}>
            <li>
              <input
                type="checkbox"
                name="campo-checkbox"
                id="campo-checkbox"
              />
              <label htmlFor="campo-checkbox">{content}</label>
              <button>
                <Trash size={20} />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
