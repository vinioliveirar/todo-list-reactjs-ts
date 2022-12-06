import { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from "react";
import { v4 } from "uuid";
import { ListTaks } from "./ListTask";
import styles from "./Task.module.css";

export interface Task {
  id: string;
  content: string;
}

export function Task() {
  const [tasks, setTaks] = useState<Task[]>([]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTaks(event: FormEvent) {
    event.preventDefault();
    setTaks([...tasks, { id: v4(), content: newTaskText }]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.content !== taskToDelete;
    });
    setTaks(tasksWithoutDeletedOne);
  }

  return (
    <div className={styles.content}>
      <div className="input">
        <form onSubmit={handleCreateNewTaks} className={styles.input}>
          <input
            type="text"
            value={newTaskText}
            placeholder="Adicionar uma nova tarefa"
            onChange={handleNewTaskChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>

      <div className={styles.contentBox}>
        <header className={styles.taskHeader}>
          <p className={styles.created}>
            Tarefas criadas{" "}
            <span className={styles.counter}>{tasks.length}</span>
          </p>
          <p className={styles.done}>
            Concluidas <span className={styles.counter}></span>
          </p>
        </header>
        <section className={styles.contentListTask}>
          {tasks.map((task) => {
            return (
              <ListTaks key={task.id} task={task} onDeleteTask={deleteTask} />
            );
          })}
        </section>
      </div>
    </div>
  );
}
