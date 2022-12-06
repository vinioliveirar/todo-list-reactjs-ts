import { Trash } from "phosphor-react";
import styles from "./ListTask.module.css";
import { Task } from "./Task";

interface TaskProps {
  task: Task;
  onDeleteTask: (task: string) => void;
}

export function ListTaks({ task, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.content);
  }
  return (
    <div>
      <section className={styles.contentTasks}>
        <div>
          <ul className={styles.listTaks}>
            <li>
              <input
                id={task.id}
                className={styles.checkbox}
                type="checkbox"
                name="todo"
              />
              <label className={styles.task} htmlFor={task.id}>
                {task.content}
              </label>
              <button title="Deletar Task" onClick={handleDeleteTask}>
                <Trash size={20} />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
