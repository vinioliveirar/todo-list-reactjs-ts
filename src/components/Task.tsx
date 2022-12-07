import { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from "react";
import { v4 } from "uuid";
import { ListTaks } from "./ListTask";
import styles from "./Task.module.css";
import Clipboard from "../assets/Clipboard.svg";

export interface Task {
  id: string;
  content: string;
  completed: boolean;
}

export function Task() {
  const [tasks, setTaks] = useState<Task[]>([]);
  const [completedTask, setCompletedTask] = useState(0);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTaks(event: FormEvent) {
    event.preventDefault();
    setTaks([...tasks, { id: v4(), content: newTaskText, completed: false }]);
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

  function handleCheckTask(id: string) {
    const newTaskList = tasks
      .map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }

        return task;
      })
      .sort((a, b) => Number(a.completed) - Number(b.completed));

    setTaks(newTaskList);
    const seeCompletedTasks = tasks.filter((task) => {
      return task.completed;
    });

    setCompletedTask(seeCompletedTasks.length);
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
            Concluidas{" "}
            <span className={styles.counter}>
              {completedTask} de {tasks.length}
            </span>
          </p>
        </header>

        {tasks.length === 0 ? (
          <div className={styles.noTasks}>
            <img src={Clipboard} alt="Clipboard" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <section className={styles.contentListTask}>
            {tasks.map((task) => {
              return (
                <ListTaks
                  key={task.id}
                  task={task}
                  onDeleteTask={deleteTask}
                  onCheckTask={handleCheckTask}
                  completedTaks={task.completed}
                />
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
}
