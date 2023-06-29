import { Check, Circle, Trash } from "phosphor-react";
import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";
import { Checkbox } from "./Checkbox";
import styles from "./ListTask.module.css";
import { Task } from "./Task";

interface TaskProps {
  task: Task;
  completedTaks: boolean;
  onDeleteTask: (task: string) => void;
  onCheckTask: (task: string) => void;
}

export function ListTaks({
  task,
  onDeleteTask,
  onCheckTask,
  completedTaks = false,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.content);
  }

  function handleCheckTask() {
    onCheckTask(task.id);
  }

  return (
    <div>
      <section className={styles.contentTasks}>
        <div>
          <ul className={styles.listTaks}>
            <li>
              {completedTaks ? (
                <>
                  <Checkbox onClick={handleCheckTask} />
                  <label className={styles.taskCheck} htmlFor={task.id}>
                    {task.content}
                  </label>
                </>
              ) : (
                <>
                  <Checkbox checked onClick={handleCheckTask} />
                  <label className={styles.task} htmlFor={task.id}>
                    {task.content}
                  </label>
                </>
              )}

              <button
                className={styles.trash}
                title="Deletar Task"
                onClick={handleDeleteTask}
              >
                <Trash size={20} />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
