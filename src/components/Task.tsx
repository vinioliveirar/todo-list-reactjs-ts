import { ChangeEvent, FormEvent, useState } from "react";
import { ListTaks } from "./ListTask";
import styles from "./Task.module.css";

export function Task() {
  const [tasks, setTaks] = useState(["isso é uma task"]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTaks(event: FormEvent) {
    event.preventDefault();
    setTaks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  return (
    <div>
      <div>
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
            Tarefas criadas <span className={styles.counter}>0</span>
          </p>
          <p className={styles.done}>
            Concluidas <span className={styles.counter}>0</span>
          </p>
        </header>
        <section className={styles.contentListTask}>
          {tasks.map((task) => {
            return <ListTaks content={task} />;
          })}
        </section>
      </div>
    </div>
  );
}
